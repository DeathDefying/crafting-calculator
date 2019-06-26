const config = require('./config.json');

module.exports = function MathTalents(mod)
{
	let darics,
		gplates,
		kits,
		cc,
		gold,
		crit,
		pie = config.pie;
	
	mod.command.add(['craft'],(arg,arg2,arg3) =>
	{
		if(arg && arg.length > 0) arg = arg.toLowerCase();
		if(arg2 && arg2.length > 0) arg2 = arg2.toLowerCase();
		
		if(arg3 && arg3.length > 0)
		{
			arg3 = arg3.toLowerCase();
			switch(arg3)
			{
				case "pie":
					if(pie) 
					{ 
						mod.command.message("Pie enabled");
						pie = true;
					}
					else 
					{
						mod.command.message("Pie Disabled");
						pie = false;
					}
				default:
					mod.command.message('Unknown command - Please read the readme');
			}
		}
		
		switch(arg)
		{
			case 'gtalent':
				calculateGolden(arg,arg2);
				break;
			case 'daric':
				calculateDaric(arg,arg2);
				break;
			case 'stalent':
				calculateGolden(arg,arg2);
				break;
			case 'siglo': 
				calculateDaric(arg,arg2);
				break;
			default:
				mod.command.message('Unknown command - Please read the readme');
		}
	});
	
	function calculateGolden(arg,arg2)
	{
		if(!(errorMessage(arg2)))
		{
			mod.command.message("Please type a number a number >= 5");
			return;
		}
		
		if(pie)
		{
			crit = 0.055;
		}
		else
		{
			crit = 0.05;
		}
		
		darics = ((arg2/5)*3);
		darics = Math.round(((arg2/5)*crit*2)+darics);
		gplates = ((darics/5)*3);
		gplates = Math.round(((darics/5)*crit*2)+gplates);
		
		kits = ((arg2/5)*(60)) + ((darics/5)*(240));
		cc = Math.round((((arg2/5)*(20)) + ((darics/5) * 80))/1000);
		gold = Math.round(kits*1.07);
		
		messageTalent(darics,gplates,kits,cc,gold,arg,arg2);
	}
	
	function calculateDaric(arg,arg2)
	{
		
		if(!(errorMessage(arg2)))
		{
			mod.command.message("Please type a number a number >= 5");
			return;
		}
		
		gplates = ((arg2/5)*3);
		gplates = Math.round(((arg2/5)*crit*2)+gplates);
		
		kits = ((arg2/5)*(240));
		cc = Math.round((((arg2/5) * 80))/1000);
		gold = Math.round(kits*1.07);
		
		messageDaric(arg,arg2,gplates,kits,cc,gold);
	}

	function messageDaric(arg,arg2,gplates,kits,cc,gold)
	{
		switch (arg)
		{
			case 'daric':
				mod.command.message(`<font color="#00FFFF">${arg2}</font>` + " Golden Darics equals to: ");
				mod.command.message(`<font color="#00FFFF">${gplates}</font>` + " Golden Plates");
				mod.command.message(`<font color="#00FFFF">${kits}</font>` + " Kits required");
				mod.command.message(`<font color="#00FFFF">${cc}</font>` + " CC's required");
				mod.command.message(`<font color="#00FFFF">${gold}</font>` + " Gold required");
				break;
			case 'siglo':
				mod.command.message(`<font color="#00FFFF">${arg2}</font>` + " Silver Siglos equals to: ");
				mod.command.message(`<font color="#00FFFF">${gplates}</font>` + " Silver Plates");
				mod.command.message(`<font color="#00FFFF">${kits}</font>` + " Kits required");
				mod.command.message(`<font color="#00FFFF">${cc}</font>` + " CC's required");
				mod.command.message(`<font color="#00FFFF">${gold}</font>` + " Gold required");
				break;
		}
	}
	
	function messageTalent(darics,gplates,kits,cc,gold,arg,arg2)
	{
		switch (arg)
		{
			case 'gtalent':
				mod.command.message(`<font color="#00FFFF">${arg2}</font>` + " Golden Talents equals to: ");
				mod.command.message(`<font color="#00FFFF">${darics}</font>` + " Golden Darics");
				mod.command.message(`<font color="#00FFFF">${gplates}</font>` + " Golden Plates");
				mod.command.message(`<font color="#00FFFF">${kits}</font>` + " Kits required");
				mod.command.message(`<font color="#00FFFF">${cc}</font>` + " CC's required");
				mod.command.message(`<font color="#00FFFF">${gold}</font>` + " Gold required");
				break;
			case 'stalent':
				mod.command.message(`<font color="#00FFFF">${arg2}</font>` + " Silver Talents equals to: ");
				mod.command.message(`<font color="#00FFFF">${darics}</font>` + " Silver Siglos");
				mod.command.message(`<font color="#00FFFF">${gplates}</font>` + " Silver Plates");
				mod.command.message(`<font color="#00FFFF">${kits}</font>` + " Kits required");
				mod.command.message(`<font color="#00FFFF">${cc}</font>` + " CC's required");
				mod.command.message(`<font color="#00FFFF">${gold}</font>` + " Gold required");
				break;
		}

	}
	
	function errorMessage(arg)
	{
		if(isNaN(arg) || arg < 5)
		{
			return false;
		}
		return true;
	}
	
	mod.command.add(['gems'],(arg_gem) =>
	{
		let sapphires =  Math.round(arg_gem/2);
		let emeralds  =  Math.round(sapphires/5);
		let diamonds  =  Math.round(emeralds/10);
		
		let gem_kits =  ((arg_gem/2)*20) + ((sapphires/5)*100) + ((emeralds/10)*1000);
		let cc 		 = 	Math.round((((arg_gem/2)*20) + ((sapphires/5)*85) + ((emeralds/10)*500))/1000);
		let gold     =  Math.round(gem_kits*1.07);
		
		if(isNaN(arg_gem))
		{
			mod.command.message("Please type a number as argument, i.e: gems 500");
		}
		else if(arg_gem >= 2)
		{		
			mod.command.message(`<font color="#00FFFF">${arg_gem}</font>` + " Rubies equals to: ");
			mod.command.message(`<font color="#00FFFF">${sapphires}</font>` + " Sapphires");
			mod.command.message(`<font color="#00FFFF">${emeralds}</font>` + " Emeralds");
			mod.command.message(`<font color="#00FFFF">${diamonds}</font>` + " Diamonds");
			mod.command.message(`<font color="#00FFFF">${gem_kits}</font>` + " Kits required");
			mod.command.message(`<font color="#00FFFF">${cc}</font>` + " CC's required");
			mod.command.message(`<font color="#00FFFF">${gold}</font>` + " Gold required");
		}
		else
		{
			mod.command.message("Please type a number a number >= 2");
		}
	});
}
