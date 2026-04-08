const path = require("node:path");
const fs = require("node:fs");
const os = require("node:os");
const EventEmitter = require("node:events");
const console = require("node:console");

// 1
function showCurrentPath() {
    const file = __filename;
    const dir = __dirname;
    console.log({
        File: file,
        Dir: dir
    });
}
showCurrentPath();

// 2
function getFileName(filePath) {
    return path.basename(filePath);
}
console.log(getFileName("/user/files/report.pdf"));

// 3
function buildPath(obj) {
    return obj.dir + "/" + obj.name + obj.ext;
}
console.log(buildPath({ dir: "/folder", name: "app", ext: ".js" }));

// 4
function getExtension(filePath) {
    return path.extname(filePath);
}
console.log(getExtension("/docs/readme.md"));

// 5
function parsePath(filePath) {
    let p = path.parse(filePath);
    return { Name: p.name, Ext: p.ext };
}
console.log(parsePath("/home/app/main.js"));

// 6
function checkAbsolute(filePath) {
    return path.isAbsolute(filePath);
}
console.log(checkAbsolute("/home/user/file.txt"));

// 7
function joinSegments(a, b, c) {
    return a + "/" + b + "/" + c;
}
console.log(joinSegments("src", "components", "App.js"));

// 8
function resolvePath(p) {
    return path.resolve(p);
}
console.log(resolvePath("./index.js"));

// 9
function joinTwoPaths(p1, p2) {
    return p1 + "/" + p2;
}
console.log(joinTwoPaths("/folder1", "folder2/file.txt"));

// 10
function deleteFileAsync(filePath) {
    if (fs.existsSync(filePath)) {
        fs.unlink(filePath, () => {
            console.log("file deleted");
        });
    } else {
        console.log("file not found");
    }
}
deleteFileAsync("./file.txt");

// 11
function createFolderSync(name) {
    if (!fs.existsSync(name)) {
        fs.mkdirSync(name);
        console.log("done");
    } else {
        console.log("already exists");
    }
}
createFolderSync("test");

// 12
const emitter = new EventEmitter();

emitter.on("start", () => {
    console.log("welcome");
});

emitter.emit("start");

// 13
emitter.on("login", (name) => {
    console.log("logged in:", name);
});

emitter.emit("login", "Ahmed");

// 14
try {
    const data = fs.readFileSync("./notes.txt", "utf8");
    console.log(data , "This is a note");
} catch (error) {
    console.log(err);
}

// 15
fs.writeFile("async.txt", "Async save", (err)=>{
 if(err){
    console.log(err)
 } 
   console.log("fille written successfully");  
}); 
      
// 16
function checkExists(file) {
    return fs.existsSync(file);
}
console.log(checkExists("notes.txt"));

// 17
function getOSInfo() {
    console.log(os.platform(), os.arch());
}
getOSInfo();


//bonus
function findKthPositive(arr, k) {
    let missing = 0;
    let current = 1;
    let i = 0;
    while (missing < k) {
        if (i < arr.length && arr[i] === current) {
            i++; 
        } else {
            missing++;
            if (missing === k) {
                return current;
            }
        }
        current++;
    }
}
console.log(findKthPositive([2,3,4,7,11], 5));