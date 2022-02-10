const {
    WAConnection,
    MessageType,
    Presence,
    Mimetype,
    GroupSettingChange
} = require('@adiwajshing/baileys')
const fs = require('fs')
const { color } = require('./lib/color')
const {_wait, getBuffer, h2k, generateMessageID, banner, getGroupAdmins, getRandom, start, success, author, close } = require('./lib/functions');
const { Miminnya, SesionName, ownerNumber} = require('./setting.json')
require('./zeebot.js')
const moment = require("moment-timezone")
nocache('./zeebot.js', module => console.log(`${module} Im Coming 4you❤️`))
const _gombal = JSON.parse(fs.readFileSync('./lib/data/gombal.json'));
const _welkom = JSON.parse(fs.readFileSync('./lib/data/welcome.json'))
const gombal = _gombal[Math.floor(Math.random() * _gombal.length)]
const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
          if(time2 < "23:59:00"){
          var ucapanWaktu = 'GoodNigh'
}
          if(time2 < "19:00:00"){
          var ucapanWaktu = 'GooodEvening'
}
          if(time2 < "18:00:00"){
          var ucapanWaktu = 'GoodEvening'
}
          if(time2 < "15:00:00"){
          var ucapanWaktu = 'GoodAfternoon'
}
          if(time2 < "11:00:00"){
          var ucapanWaktu = 'GoodMoorning'
}
          if(time2 < "05:00:00"){
          var ucapanWaktu = 'GoodNight'
}
           
const starts = async (zee = new WAConnection()) => {
//Ava? Amda Mau Mengumbah Yah? Uhh somry tydak semudah itu wahyuu
var _0x15326f=_0x4f0c;function _0x4f0c(_0x3b1755,_0xbebfe3){var _0x5ee938=_0x5ee9();return _0x4f0c=function(_0x4f0ccc,_0x4d7345){_0x4f0ccc=_0x4f0ccc-0x1d5;var _0xc5c765=_0x5ee938[_0x4f0ccc];return _0xc5c765;},_0x4f0c(_0x3b1755,_0xbebfe3);}(function(_0x1144e1,_0x387257){var _0x55182f=_0x4f0c,_0x4267ac=_0x1144e1();while(!![]){try{var _0x13c0d0=-parseInt(_0x55182f(0x1ed))/0x1*(parseInt(_0x55182f(0x1df))/0x2)+parseInt(_0x55182f(0x1e6))/0x3+-parseInt(_0x55182f(0x1e4))/0x4+parseInt(_0x55182f(0x1ef))/0x5+parseInt(_0x55182f(0x1ee))/0x6*(parseInt(_0x55182f(0x1dc))/0x7)+-parseInt(_0x55182f(0x1da))/0x8*(-parseInt(_0x55182f(0x1e5))/0x9)+-parseInt(_0x55182f(0x1e7))/0xa;if(_0x13c0d0===_0x387257)break;else _0x4267ac['push'](_0x4267ac['shift']());}catch(_0x1e938f){_0x4267ac['push'](_0x4267ac['shift']());}}}(_0x5ee9,0xd8f6e),zee[_0x15326f(0x1e2)]['level']=_0x15326f(0x1ec),console['log'](banner),console[_0x15326f(0x1e0)]('\x1b[1;31m×\x1b[1;37m>',_0x15326f(0x1d6),color(_0x15326f(0x1e8)),_0x15326f(0x1dd),color(''+Miminnya)),console[_0x15326f(0x1e0)](color(_0x15326f(0x1f0),_0x15326f(0x1e3))),console[_0x15326f(0x1e0)](color(_0x15326f(0x1d9),_0x15326f(0x1e3))),console[_0x15326f(0x1e0)](color(_0x15326f(0x1d7),_0x15326f(0x1e3))),console[_0x15326f(0x1e0)](color('Quotes\x20:\x20'+gombal,_0x15326f(0x1eb))),console[_0x15326f(0x1e0)](color(_0x15326f(0x1d8),_0x15326f(0x1e3))),zee[_0x15326f(0x1d5)]=[0x2,0x85f,0x3],zee[_0x15326f(0x1ea)]=[_0x15326f(0x1db),_0x15326f(0x1f1),_0x15326f(0x1e1)],zee['on']('qr',()=>{var _0x115a74=_0x15326f;console[_0x115a74(0x1e0)](color('[',_0x115a74(0x1e9)),color('!',_0x115a74(0x1eb)),color(']',_0x115a74(0x1e9)),color(_0x115a74(0x1de)));}));function _0x5ee9(){var _0x5da042=['1884905eJAEWn','SCRIPT\x20INI\x20DI\x20SUSUN\x20OLEH','Safari','version','[\x1b[1;32mシ︎\x1b[1;37m]','Be\x20Smart\x20People','#Semangat\x20Untuk\x20Hari\x20ini','•\x20𝙁𝙚𝙗𝙧𝙞𝙖𝙣𝙨𝙮𝙖𝙝','8NJyYdW','ZeeBotz','7238uEtoxo','Kak','Scan\x20Ngab,\x20gk\x20scan\x20gk\x20jadi','4YwtigO','log','3.5','logger','yellow','1234612RUNmPh','9376308VAVFXy','2434965VqGidK','5327910UKhtzJ','Hallo','white','browserDescription','cyan','warn','328226Kmdjzc','906uPDdTn'];_0x5ee9=function(){return _0x5da042;};return _0x5ee9();}

    fs.existsSync(`./${SesionName}.json`) && zee.loadAuthInfo(`./${SesionName}.json`)
    zee.on('connecting', () => {
    start('2','💜😈')
    })
    zee.on('open', () => {
    success('2', 'Dah Connect Tuhh!!')
    start('','')
    })
    await zee.connect({timeoutMs: 30*1000})
    fs.writeFileSync(`./${SesionName}.json`, JSON.stringify(zee.base64EncodedAuthInfo(), null, '\t'))
    
    zee.on('chat-update', async (message) => {
    require('./zeebot.js')(zee, message, _welkom)
    })
    
	zee.on('group-participants-update', async (anu) => {
	  const isWelkom = _welkom.includes(anu.jid)
	  
		try {
			    mem = anu.participants[0]
			    console.log(anu)
                try {
               pic = await zee.getProfilePicture(mem)
                } catch (e) {
                pic = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
            }
            try {
                pp_grup = await zee.getProfilePicture(anu.jid)
                } catch (e) {
                pp_grup = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
             }
                  
            if (anu.action == 'add' && mem.includes(zee.user.jid)) {
            zee.sendMessage(anu.jid, 'Halo! Terima Kasih sudah Mengundangku, Jika ingin Menggunakan Bot, Tolong Jadikan Admin Ya, Ketik .menu', 'conversation')
            }


            if (!isWelkom) return
             if (anu.action == 'add' && !mem.includes(zee.user.jid)) {     
                mdata = await zee.groupMetadata(anu.jid)
                memeg = mdata.participants.length                 
            	num = anu.participants[0]
                groupName = mdata.subject
                let v = zee.contacts[num] || { notify: num.replace(/@.+/, '') }
                anu_user = v.vname || v.notify || num.split('@')[0]
              teks = `Selamat Datang Kak *@${mem.split('@')[0]}*\n*Welcome in group *${groupName}*\n*Nomor :* ${mem.replace('@s.whatsapp.net', '')}\nSilahkan Baca Rules Groupnya Kak\n\n*Semoga betah~~*`
              buff = await getBuffer(pic)
              zee.sendMessage(mdata.id, { contentText: `${teks}`, footerText: `Welcome Message By *Pebri*`, buttons: [{buttonId: `.selamatdatang`,buttonText:{displayText: 'WELCOME KAK'},type:1}],headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: buff, contextInfo: {"mentionedJid": [num]}}}, 'buttonsMessage')
		}
		
		if (!isWelkom) return
            if (anu.action == 'remove' && !mem.includes(zee.user.jid)) {
                mdata = await zee.groupMetadata(anu.jid)
            	num = anu.participants[0]
                let w = zee.contacts[num] || { notify: num.replace(/@.+/, '') }
                anu_user = w.vname || w.notify || num.split('@')[0]
                memeg = mdata.participants.length
                out = `Selamat Tinggal Kak @${num.split('@')[0]} Semoga Jasamu Tidak Tenang!`
               buff = await getBuffer(pic)
               zee.sendMessage(mdata.id, { contentText: `${out}`, footerText: `Left Message By *Pebri*`, buttons: [{buttonId: `.bay`,buttonText:{displayText: 'BYE KAK👋'},type:1}],headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: buff, contextInfo: {"mentionedJid": [num]}}}, 'buttonsMessage')
            }
			} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
     
       })
       }
	
       
       
/**
 * Uncache if there is file change
 * @param {string} module Module name or path
 * @param {function} cb <optional> 
 */
function nocache(module, cb = () => { }) {
    console.log('[ ! ]', `${module}`, 'Ni Boss Senggol Dong💜😈')
    fs.watchFile(require.resolve(module), async () => {
        await uncache(require.resolve(module))
        cb(module)
    })
}

/**
 * Uncache a module
 * @param {string} module Module name or path
 */
function uncache(module = '.') {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(module)]
            resolve()
        } catch (e) {
            reject(e)
        }
    })
}

starts()
