class AssetManager {
    constructor() {
        this.successCount = 0; //tracks success
        this.errorCount = 0; //tracks errors
        this.cache = []; //saves downloaed data
        this.downloadQueue = []; // array of path names
    };

    queueDownload(path) {
        console.log("Queueing " + path);
        this.downloadQueue.push(path); // stores path names in downloadQueue
    };

    isDone() {
        // checks if queue = success + error
        return this.downloadQueue.length === this.successCount + this.errorCount;
    };

    downloadAll(callback) {
        // if queue is empty, go to callback function
        if (this.downloadQueue.length === 0) setTimeout(callback, 10);
        for (var i = 0; i < this.downloadQueue.length; i++) {
            var img = new Image();
            var that = this; // refers to AssetManager for use in function()

            // print current file path to be downloaded
            var path = this.downloadQueue[i];
            console.log(path);

            // triggers when img is loaded
            img.addEventListener("load", function () {
                console.log("Loaded " + this.src); // prints success
                that.successCount++;
                if (that.isDone()) callback(); // when all img's are downloaded, start game
            });

            // triggers if there's an error
            img.addEventListener("error", function () {
                console.log("Error loading " + this.src); // prints error
                that.errorCount++;
                if (that.isDone()) callback(); // when all img's are downloaded, start game
            });

            img.src = path; // triggers download from path and stores in img
            this.cache[path] = img; // adds new img to cache
        }
    };

    getAsset(path) {
        return this.cache[path];
    };
};

