process.stdout.write('prompt > ');
const pwd = require('./pwd.js');
const ls = require('./ls.js');
const cat = require('./cat.js');
const curl = require('./curl.js');

process.stdin.on('data', (data) => {
    const cmd = data.toString().trim().split(" ");  //remove the newline
      if(cmd[0] === 'pwd'){
        pwd();
      } else if (cmd[0] === 'ls') {
        ls();
      } else if (cmd[0] === 'cat') {
        const fileName = cmd[1];
        cat(fileName);
      } else if (cmd[0] === 'curl') {
        const fileName = cmd[1];
        curl(fileName);
      }
    process.stdout.write('\nYou typed: ' + cmd);
    process.stdout.write('\nprompt > ');
  })







