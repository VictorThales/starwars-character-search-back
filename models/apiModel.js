require("dotenv").config();
const axios = require('axios');
const { response } = require("express");


const all = async (page) => {
    try {
        let response = await axios({
            method: 'get',
            url: `${process.env.API_URL}/people/?page=${page}`,
            responseType: 'json'
        })

        return response.data.results.map((item) => {
            return {
                name: item.name
            }
        })

    } catch (error) {
        console.error(error)
    }
}

const findFilms = async (data) => {
    return Promise.all(data.map(film =>
        axios({
            method: 'get',
            url: film,
            responseType: 'json'
        }).then(resp => ({ title: resp.data.title, release_date: resp.data.release_date }))
    )).then().catch(error => console.error(error))
}

const chareacterInfos = async (name) => {

    let response = await axios({
        method: 'get',
        url: `${process.env.API_URL}/people/?search=${name}`,
        responseType: 'json'
    })


    const films = await findFilms(response.data.results[0].films)

    return response.data.results.map((item) => {
        return {
            birth_year: item.birth_year,
            eye_color: item.eye_color,
            gender: item.gender,
            films: films
        }
    })
}



module.exports = {
    all,
    chareacterInfos
}