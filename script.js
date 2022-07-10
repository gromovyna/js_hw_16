let marvelHeroes = [
	{
		name: "Thor"
	},
	{
		name: "Spider Man"
	}
];

let dcHeroes = [
	{
		name: "Superman"
	},
	{
		name: "Batman"
	},
	{
		name: "Deadpool"
	}
];
 Array.prototype.heroesRender = function(team) {
    let trs = this.map(
        function(findAHero){ 
            return`
                <tr >
                    <td>${findAHero.name}</td>
                    <td>
                        <img src="images/${team}/${findAHero.name}.svg "width=70">
                    </td>
                </tr>
                `
        }
    )
    .join("")
    document.write(`
    <table  border="1" cellpadding="5" style=" border-collapse: collapse; border: 1px solid black;; width:800px; text-align:center; margin-bottom:30px" >
        <thead >
            <tr>
                <th>Name</th>
                <th>Icon</th>
            </tr>
        </thead>
        <tbody>
            ${trs}
        </tbody>
    </table>
    	`)
    }
    
 marvelHeroes.heroesRender("marvel")
 dcHeroes.heroesRender("dc")