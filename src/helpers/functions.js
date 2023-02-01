export function isImage(pathname) {
    let ext = pathname.split('.').pop();
    if (ext === 'jpg'
        || ext === 'jpeg'
        || ext === 'png'
        || ext === 'gif') {
        return true;
    } else {
        return false;
    }
}

export function isVideo(pathname) {
    let ext = pathname.split('.').pop();
    if (ext === 'mov'
        || ext === 'mp4'
        || ext === 'wmv'
        || ext === 'avi') {
        return true;
    } else {
        return false;
    }
}