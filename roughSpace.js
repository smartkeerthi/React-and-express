import system from 'system-commands'

function systemCommands(){
    system('ls').then(
        output => {
            data = 'Respons From Server:\n\n' + output
            console.log(data)
            return res.json(data)
        }
    ).catch(
        error => {
            console.error(error)
            return res.json(error)
        }
    )
}