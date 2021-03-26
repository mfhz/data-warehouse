const userModel = require("../../database/usuarios/modelos/usuarioModelo");
const companyModel = require("../../database/compania/modelos/companiaModelo");
const regionModel = require("../../database/region/modelos/regionModelo");
const countryModel = require("../../database/pais/modelos/paisModelo");
const cityModel = require("../../database/ciudad/modelos/ciudadModelo");
const contactModel = require("../../database/contactos/modelos/contactoModelo");
const bCrypt = require("bcrypt");
const config = require("../../config/index");

let users = [
	{ 
		isAdmin: true, 
		name: 'Sebastian', 
		last_name: 'Lopez', 
		email: 'sebastian@gmail.com', 
		password: '12345qwer' 
	},
	{ 
		isAdmin: false, 
		name: 'Liz', 
		last_name: 'castro', 
		email: 'liz@hotmail.com', 
		password: 'qwert1234' 
	},
    { 
		isAdmin: false, 
		name: 'Daniela', 
		last_name: 'Fajardo', 
		email: 'daniela@gmail.com', 
		password: '09876POIU' 
	},
];

let regions = [
    { name: 'Europa' }, 
    { name: 'America' }, 
    { name: 'Asia' }
];
let countries = [
	{ regionId: 3, name: 'España' },
	{ regionId: 2, name: 'argentina' },
	{ regionId: 2, name: 'colombia' },
	{ regionId: 3, name: 'China' },
	{ regionId: 1, name: 'usa' },
	{ regionId: 1, name: 'India' },
];
let cities = [
	{ countryId: 5, name: 'nueva york' },
	{ countryId: 4, name: 'la habana' },
	{ countryId: 6, name: 'canada' },
	{ countryId: 3, name: 'medellin' },
	{ countryId: 2, name: 'buenos aires' },
	{ countryId: 4, name: 'cienfuegos' },
	{ countryId: 1, name: 'savaneta' },
    { countryId: 5, name: 'chicago' },
    { countryId: 1, name: 'san nicola' },
];
let companies = [
	{ 
        name: 'Instalcom SAS', 
        address: 'av 123 cl 55', 
        phone: '035-3637890', 
        email: 'info@instalcomsas.com', 
        cityId: 4 
    },
    { 
        name: 'Softnet SAS', 
        address: 'av circunvalar', 
        phone: '035-3567890', 
        email: 'soporte@softnet.gov', 
        cityId: 1 
    },
	{
		name: 'Suramericana',
		address: 'murillo # 43 54',
		phone: '035-3345674',
		email: 'contactame@sura.com',
		cityId: 9,
	},
	{
		name: 'Postobon',
		address: 'cl 54 #72 155',
		phone: '035-3423689',
		email: 'contacta@postobon.com',
		cityId: 2,
	},
];
let contacts = [
	{
		name: 'Daniel',
		last_name: 'Montes',
		phone: '3135567890',
		email: 'daniel@gmail.com',
		occupation: 'asistente administrativo',
		companyId: 1,
		cityId: 1,
		address: 'av siempre viva 123',
	},
	{
		name: 'Alejandra',
		last_name: 'Zapata',
		phone: '3198909765',
		email: 'alejandra@gmail.com',
		occupation: 'quimico',
		companyId: 2,
		cityId: 1,
		address: '890 av circunvalar',
	},
	{
		name: 'Jairo',
		last_name: 'Calle',
		phone: '3209807654',
		email: 'jairo@hotmail.com',
		occupation: 'quimico',
		companyId: 4,
		cityId: 2,
		address: 'cl falsa 123',
	},
];
users.forEach(async (user) => {
	await bCrypt.hash(user.password, parseInt(config.rounds_bcr), function (error, encrypted) {
		if (error) {
			console.log(error);
		} else {
			user.password = encrypted;
			userModel
				.create(user)
				.then((user) => {
					console.log('usuarios creados');
				})
				.catch((error) => {
					console.log(error);
				});
		}
	});
});
regions.forEach(async (region) => {
	try {
		await regionModel.create(region);
	} catch (error) {
		console.log(error);
	}
});
countries.forEach(async (country) => {
	try {
		countryModel.create(country);
	} catch (error) {
		console.log(error);
	}
});
cities.forEach(async (city) => {
	try {
		cityModel.create(city);
	} catch (error) {
		console.log(error);
	}
});
companies.forEach(async (company) => {
	try {
		companyModel.create(company);
	} catch (error) {
		console.log(error);
	}
});
contacts.forEach(async (contact) => {
	try {
		contactModel.create(contact);
	} catch (error) {
		console.log(error);
	}
});
