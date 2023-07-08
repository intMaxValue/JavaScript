function songs(input) {
    class Song{
        constructor(typeList, name, time){
            this.typeList = typeList,
            this.name = name,
            this.time = time
        }
    }

    input.shift();
    let type = input.pop();

    if (type === "all") {
        
        for (const song of input) {
            [typeList, songName, time] = song.split('_');
            
            console.log(songName);
        }
        return;
    }

    for (const song of input) {
        [typeList, songName, time] = song.split('_');

                if (typeList === type) {
            console.log(songName);
        }
    }
}

songs([2,
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'all']
    )