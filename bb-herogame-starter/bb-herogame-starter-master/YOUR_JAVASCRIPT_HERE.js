// Write your JS here
const hero = {
    name: "Felicia",
    heroic: true,
    inventory: [],
    health: 10,
    weapon: {
        type: "sword",
        damage: 2,
    }
    }

    function rest(object) {
        if(object.health === 10){
            alert("Your health is restored, go kick ass!")
        }
        else{
        object.health = 10
        return object
        }
        
    }

    function pickUpItem(heroObject, weaponObject) {
        const newInventory = heroObject.inventory.push(weaponObject)
        return newInventory
    }
    let dagger = {
        type: "dagger",
        damage: 2,
    }
    function equipWeapon(heroObject) {
        if(heroObject.inventory.length === 0){
            heroObject.weapon = heroObject.weapon
        }
        else{
        heroObject.weapon = heroObject.inventory[0]
        }
        
        }