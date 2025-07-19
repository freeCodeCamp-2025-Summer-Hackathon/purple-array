export function getTimeInfo() {
    console.log(Intl.DateTimeFormat().resolvedOptions().timeZone);
    var now = new Date();
    var year = now.getFullYear();
    var month = (now.getMonth() + 1).toString().padStart(2, '0');
    var day = now.getDate().toString().padStart(2, '0');
    console.log(year + '/' + month + '/' + day);
}

getTimeInfo();
