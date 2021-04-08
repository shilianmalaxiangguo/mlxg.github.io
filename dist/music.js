var music = [
    {
        name: 'masquerade',
        artist: '黑石ひとみ',
        url: 'http://music.163.com/song/media/outer/url?id=592080.mp3',
        cover: 'https://tva1.sinaimg.cn/large/007S8ZIlgy1gijd4pkt8xj31c00u01kx.jpg',  
    },
    {
        name: '百变竹内玛丽樱',
        artist: 'G H C',
        url: 'http://music.163.com/song/media/outer/url?id=1423143130.mp3',
        cover: 'http://p2.music.126.net/HQxTggMCB7AHUXN-ZFEtmA==/1371091013186741.jpg',  
    },
    {
        name: '虚拟',
        artist: '陈粒',
        url: 'http://music.163.com/song/media/outer/url?id=421423808.mp3',
        cover: 'http://p2.music.126.net/Uznn_JDpEUu8v5nQowjY9Q==/109951164705200631.jpg',  
    },
  
]

var ap = new APlayer({
    container: document.getElementById('aplayer'),
    autoplay: true,
    loop: 'all',
    volume: 0.7,
    listFolded: true,
    listMaxHeight: 60,
    audio: music
});