const { spawn } = require('child_process');

exports.exec = async (command, args) => {
  return new Promise((resolve, reject) => {
    const cwd = process.cwd();
    const proc = spawn(command, args, { cwd });
    const log = [];
    const errorLog = [];
    proc.stdout.on('data', (data) => {
      const message = data.toString();
      log.push(message);
    });
    proc.stderr.on('data', (data) => {
      const message = data.toString();
      errorLog.push(message);
    });
    proc.on('exit', (code) => {
      if (errorLog.length > 0 || code !== 0) {
        reject({ code: code.toString(), log, errorLog });
      } else {
        resolve({ code: code.toString(), log, errorLog });
      }
    });
  });
};
