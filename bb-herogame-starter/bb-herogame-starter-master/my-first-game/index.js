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
    let dagger = {
        type: "dagger",
        damage: 3,
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
    function equipWeapon(heroObject) {
        if(heroObject.inventory.length === 0){
            heroObject.weapon = heroObject.weapon
        }
        else{
        heroObject.weapon.type = heroObject.inventory[0].type
        heroObject.weapon.damage = heroObject.inventory[0].damage
        }
    }
    
    
        function displayStats (){
            let heroStats = document.createElement("section")
            const h1 = document.createElement("h1")
            const heroName = document.createElement("p")
            const health = document.createElement("p")
            const weaponType = document.createElement("p")
            const weaponDamage = document.createElement("p")
            h1.innerHTML = "Hero Stats"
            heroName.innerHTML = "Hero Name: " + hero.name
            health.innerHTML = "Health: " + hero.health
            weaponType.innerHTML = " Weapon Type: " + hero.weapon.type
            weaponDamage.innerHTML = "Weapon Damage: " + hero.weapon.damage
            heroStats.classList.add("heros")
            heroStats.appendChild(h1)
            heroStats.appendChild(heroName)
            heroStats.appendChild(health)
            heroStats.appendChild(weaponType)
            heroStats.appendChild(weaponDamage)
            let showStats = document.getElementById("hero")
            showStats.appendChild(heroStats)


        }
        displayStats()

        function clearBox(){
         document.getElementById("hero").innerHTML = "";
            }
            
        function changeHeroName(){
            const newHeroName = document.getElementById("userheroname")
            const newName = newHeroName.value
            hero.name = newName
            if(newName !== "Felicia"){
                clearBox();
                displayStats();
            }
            newHeroName.value = null
        }
        function updateStats() {
            if(hero.inventory.length > 0 || hero.health !== 10 || hero.weapon.type !== "sword" || hero.weapon.damage !== 2){
                clearBox();
                displayStats();
                
            }
            else{
                displayStats();
            }
            clearBox()
            return displayStats()
             }

     function deleteElement (elementId) {
            const element = document.getElementById(elementId);
            element.parentNode.removeChild(element);
        } 

        const draino = {
    name: "Draino",
    Villian: true,
    health: 10,
    weapon: {
        type: "Robot Hands",
        damage: 2.5,
    }

        }
        function displayStatsEnemy (){
            let enemyStats = document.createElement("section")
            const h1 = document.createElement("h1")
            const enemyName = document.createElement("p")
            const health = document.createElement("p")
            const weaponType = document.createElement("p")
            const weaponDamage = document.createElement("p")
            h1.innerHTML = "Enemy Stats"
            enemyName.innerHTML = "Hero Name: " + draino.name
            health.innerHTML = "Health: " + draino.health
            weaponType.innerHTML = " Weapon Type: " + draino.weapon.type
            weaponDamage.innerHTML = "Weapon Damage: " + draino.weapon.damage
            enemyStats.classList.add("enemies")
            enemyStats.appendChild(h1)
            enemyStats.appendChild(enemyName)
            enemyStats.appendChild(health)
            enemyStats.appendChild(weaponType)
            enemyStats.appendChild(weaponDamage)
            let showStats = document.getElementById("enemy")
            showStats.appendChild(enemyStats)


        }
        displayStatsEnemy()
      
        function attackEnemy() {
            if (hero.weapon.damage < draino.weapon.damage) {
                hero.health = 0;
                alert("Game over! Bye Felicia!")
            }
            else if (hero.weapon.damage > draino.weapon.damage) {
                draino.health = 0;
                hero.health = 10;
                alert("I got you Draino!")
            }
        }
       
            