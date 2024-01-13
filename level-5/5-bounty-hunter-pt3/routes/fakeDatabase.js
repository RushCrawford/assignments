const express = require('express')
const { v4:uuidv4 } = require('uuid')

const bounties = [
    {
        firstName: "Darth",
        lastName: "Vader",
        living: false,
        bounty: 10000,
        type: "sith",
        _id: uuidv4()
    },
    {
        firstName: "Mace",
        lastName: "Windu",
        living: true,
        bounty: 10000,
        type: "jedi",
        _id: uuidv4()
    }]

module.exports = fakeDatabase