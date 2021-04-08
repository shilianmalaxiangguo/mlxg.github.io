const music = [
    {
        name: 'masquerade',
        artist: '黑石ひとみ',
        url: 'http://music.163.com/song/media/outer/url?id=592080.mp3',
        cover: 'https://tva1.sinaimg.cn/large/007S8ZIlgy1gijd4pkt8xj31c00u01kx.jpg',  
    }
]

const ap = new APlayer({
    container: document.getElementById('aplayer'),
    autoplay: true,
    loop: 'all',
    volume: 0.7,
    listFolded: true,
    listMaxHeight: 60,
    audio: music
});