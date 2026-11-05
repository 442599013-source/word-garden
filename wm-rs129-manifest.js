/* Main-course batches only; other learning pages do not load this manifest. */
for(const file of window.WMMainCourse.files){if(!/^wm-rs129-batch-\d{3}\.js$/.test(file))throw Error('Invalid batch');document.write('<script src="'+file+'?v=28"><'+'/script>')}
