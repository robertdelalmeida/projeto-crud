const CustomersModel = require('../models/customers')
const { crypto } = require('../helpers/password')

function index(req, res){
    res.render('register', {
        title: 'Cadastro de Clientes'
    })
}

async function add(req, res) {
    const {
        name,
        age,
        email,
        password,
    } = req.body

    const passwordCrypto = await crypto(password)

    const register = new CustomersModel({
        name,
        age,
        email,
        password: passwordCrypto,
    })

    register.save()
    res.send('cadastro realizado!')

    /*
    res.render('register', {
        title: 'Cadastro de clientes',
        message: 'cadastro realizado com sucesso!',
    })
    */

    console.log(register)
}


//async
function listUsers(req, res) {
    // const users = await CustomersModel.find()     comando para litstar os usuários

    res.render('listUsers', {
        title: 'listagem de usuários',
        users: 'beltrano',
    })
}

module.exports = {
    index,
    add,
    listUsers,
}