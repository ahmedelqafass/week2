const path = require("path");
const fs = require("fs");
const os = require("os");
const EventEmitter = require("events");

// 1
function showCurrentPath() {
    console.log(__filename);
    console.log(__dirname);
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
function readFileSyncExample() {
    let file = "notes.txt";

    if (!fs.existsSync(file)) {
        fs.writeFileSync(file, "This is a note");
    }

    let data = fs.readFileSync(file, "utf8");
    console.log(data);
}
readFileSyncExample();

// 15
function writeFileAsync(file, content) {
    fs.writeFile(file, content, () => {
        console.log("written");
    });
}
writeFileAsync("async.txt", "Async save");

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