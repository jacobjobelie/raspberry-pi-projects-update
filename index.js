const fs = require('fs')
const exec = require('child_process').exec
const FOLDER = "github-projects"
try{
exec(`rm -rf ${FOLDER}`)
}
}catch(e){
}
try{
  fs.mkdirSync(FOLDER)
  process.chdir(FOLDER)
  exec('git clone https://github.com/jacobjobelie/raspberry-pi-projects.git')
}catch(e){

}
fs.chmodSync(`raspberry-pi-projects/repos.sh`, '0775')
exec(`./raspberry-pi-projects/repos.sh`)