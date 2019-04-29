module.exports = function MathTalents(mod)
{
	mod.command.add(['gtalent'],(arg) =>
	{
		let darics = ((arg/5)*3);
		darics = Math.round((darics*0.05*2)+darics);
		let plates = ((darics/5)*3);
		plates = Math.round((plates*0.05*2)+plates);
		let kits = ((arg/5)*(60)) + ((darics/5)*(240));
		let cc = Math.round((((arg/5)*(20)) + ((darics/5) * 80))/1000);
		let gold = Math.round(kits*1.07);
		
		if(isNaN(arg))
		{
			mod.command.message("Please type a number as argument, i.e: gtalent 500");
		}
		else if(arg >= 5)
		{		
			mod.command.message(`<font color="#00FFFF">${arg}</font>` + " Golden Talents equals to: ");
			mod.command.message(`<font color="#00FFFF">${darics}</font>` + " Golden Darics");
			mod.command.message(`<font color="#00FFFF">${plates}</font>` + " Golden Plates");
			mod.command.message(`<font color="#00FFFF">${kits}</font>` + " Kits required");
			mod.command.message(`<font color="#00FFFF">${cc}</font>` + " CC's required");
			mod.command.message(`<font color="#00FFFF">${gold}</font>` + " Gold required");
		}
		else
		{
			mod.command.message("Please type a number a number >= 5");
		}
	});
	
	mod.command.add(['stalent'],(arg_silver) =>
	{
		let siglos = ((arg_silver/5)*3);
		siglos = Math.round((siglos*0.05*2)+siglos);
		let plates = ((siglos/5)*3);
		plates = Math.round((plates*0.05*2)+plates);
		let kits = ((arg_silver/5)*(60)) + ((siglos/5)*(240));
		let cc = Math.round((((arg_silver/5)*(20)) + ((siglos/5) * 80))/1000);
		let gold = Math.round(kits*1.07);
		
		if(isNaN(arg_silver))
		{
			mod.command.message("Please type a number as argument, i.e: stalent 500");
		}
		else if(arg_silver >= 5)
		{		
			mod.command.message(`<font color="#00FFFF">${arg_silver}</font>` + " Silver Talents equals to: ");
			mod.command.message(`<font color="#00FFFF">${siglos}</font>` + " Silver Siglos");
			mod.command.message(`<font color="#00FFFF">${plates}</font>` + " Silver Plates");
			mod.command.message(`<font color="#00FFFF">${kits}</font>` + " Kits required");
			mod.command.message(`<font color="#00FFFF">${cc}</font>` + " CC's required");
			mod.command.message(`<font color="#00FFFF">${gold}</font>` + " Gold required");
		}
		else
		{
			mod.command.message("Please type a number a number >= 5");
		}
	});
	
	mod.command.add(['gems'],(arg_gem) =>
	{
		let sapphires =  Math.round(arg_gem/2);
		let emeralds  =  Math.round(sapphires/10);
		let diamonds  =  Math.round(emeralds/10);
		
		let gem_kits =  Math.round(((arg_gem/2)*20) + ((sapphires/5)*100) + ((emeralds/10)*1000));
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