#!/usr/bin/env node

import chalk from 'chalk';
import fs from 'fs';

console.time("Speed Boost");

chalk.level = 1;
const contacts = {"\u001B[36m Matrix \u001B[39m":"@eridian:mozilla.org"}

console.clear()
console.log(chalk.magenta("Welcome to the Eridian CLI tool!"));
console.log(chalk.cyan("The Eridians are an ancient and enigmatic extraterrestrial civilization with highly advanced technology. They discovered the potent element Eridium, which holds unique properties, and constructed the enigmatic Great Vault, rumored to contain unimaginable power. Though their origins and fate are shrouded in mystery, their influence persists through scattered artifacts and inscriptions, sparking conflicts and quests for knowledge among different factions and races. The pursuit of understanding the Eridians' lore and unlocking the secrets they left behind continues to captivate and drive exploration and discovery across the galaxy."))
console.log(chalk.magentaBright("Secret messages may be hidden in this command in the future. Only time will tell."))
console.log(chalk.yellow("This package is maintained by William Kenzie and is used as a developer about-me. If you would like the package name 'Eridian' and have code already written, you may email the developer at william@kenzie.one"))
fs.lstat('.eridian', (error, stats) => {
    if (error) fs.open('.eridian', 'w', () => {})
    if (stats) {
        console.table(contacts)
        console.timeEnd("Speed Boost")
    }
})