import { PrintProcess } from "./print-process";
import { PrintProcessStepState } from "./print-process.model";
import { execSync } from "./terminal-exec";
import * as cpx from "cpx";
import fs from 'fs';
import {terminalConfirm} from "./terminal-interaction";

const libPackageJson = JSON.parse(fs.readFileSync('libs/ngx-pretty-checkbox/package.json', 'utf-8'))

enum PublishPackageStep {
  BuildLib,
  CopyAssetsFolder,
  PublishNpm,
  GitTag
}

let printProcess: PrintProcess;

function onErrorExec(step: PublishPackageStep) {
    return () => {
      printProcess.updateState(step, PrintProcessStepState.Error);
    };
  }


async function run() {
  // const versionString = await getNewSemanticVersion(libPackageJson.version);
  const confirmedPublish = await terminalConfirm(`Are you sure to publish this version (${libPackageJson.version}?)`, false);

  if (!confirmedPublish) {
    return;
  }

  printProcess = new PrintProcess([
    { id: PublishPackageStep.BuildLib, state: PrintProcessStepState.Default, text: 'Build release library' },
    { id: PublishPackageStep.CopyAssetsFolder, state: PrintProcessStepState.Default, text: 'Copy assets file library dist folder' },
    { id: PublishPackageStep.PublishNpm, state: PrintProcessStepState.Default, text: 'Publish to npm' },

    { id: PublishPackageStep.GitTag, state: PrintProcessStepState.Default, text: 'Git tag' },
  ], {
    header: `Publish new version of ngx-pretty-checkbox to npm (${libPackageJson.version})`,
  });


  // 1- Build Lib
  printProcess.updateState(PublishPackageStep.BuildLib, PrintProcessStepState.Pending);
  execSync(`nx run libs-ngx-pretty-checkbox:build:production`, onErrorExec(PublishPackageStep.BuildLib));
  printProcess.updateState(PublishPackageStep.BuildLib, PrintProcessStepState.Done);

  // 2- Copy assets file library dist folder
  printProcess.updateState(PublishPackageStep.CopyAssetsFolder, PrintProcessStepState.Pending);
  cpx.copySync('logo.gif', 'dist/libs/ngx-pretty-checkbox');
  cpx.copySync('preview.gif', 'dist/libs/ngx-pretty-checkbox');
  cpx.copySync('README.md', 'dist/libs/ngx-pretty-checkbox');
  printProcess.updateState(PublishPackageStep.CopyAssetsFolder, PrintProcessStepState.Done);

  // 3- Publish to npm
  printProcess.updateState(PublishPackageStep.PublishNpm, PrintProcessStepState.Pending);
  execSync(`cd dist/libs/ngx-pretty-checkbox && npm publish`, onErrorExec(PublishPackageStep.PublishNpm));
  printProcess.updateState(PublishPackageStep.PublishNpm, PrintProcessStepState.Done);

  // 4- Github Versioning
  printProcess.updateState(PublishPackageStep.GitTag, PrintProcessStepState.Pending);
  execSync(`git tag v${libPackageJson.version} -f`, onErrorExec(PublishPackageStep.GitTag));
  execSync(`git push --tags`, onErrorExec(PublishPackageStep.GitTag));
  printProcess.updateState(PublishPackageStep.GitTag, PrintProcessStepState.Done);
}

run();