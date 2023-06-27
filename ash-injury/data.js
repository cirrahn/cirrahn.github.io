const INJ_MINOR = [
	{name: "Ringing Ears/Watering Eyes", effect: "Disadvantage on perception checks until Short Rest at least 1 hour long."},
	{name: "Dirty Wound", effect: " Hit point maximum is reduced by 5 for each day it festers. Constitution saving throw or a medicine check to stave off infection."},
	{name: "Minor Scar", effect: " Non-visible scar under the clothing. Lesser Restoration will cure it."},
	{name: "Minor Concussion", effect: " Disadvantage On Int&Wis checks until a Short Rest at least 1 hour long."},
	{name: "Sprained Ankle", effect: "Speed lowered by 5 feet until a Short Rest at least 1 hour long."},
	{name: "Bruised Spine", effect: "Disadvantage on Athletics and Acrobatics checks until a Short Rest at least 1 hour long.."},
	{name: "Distracting Pain", effect: "Disadvantage on Initiative until a Short Rest at least 1 hour long."},
	{name: "Broken Fingers", effect: "Disadvantage on Sleight of Hand checks and spells with somatic components until a Short Rest at least 1 hour long."},
	{name: "Bitten Tongue", effect: "Disadvantage on Charisma checks and Spells with Vocal components until a Short Rest at least 1 hour long."},
	{name: "Black Eye", effect: "Swollen shut. Darkvision reduced by half. Disadvantage on ranged attacks until a Short Rest at least 1 hour long."},
	{name: "Broken Nose/Chipped Teeth", effect: "You whistle when you breathe. Disadvantage on Stealth checks until a Short Rest at least 1 hour long."},
	{name: "Bruised Muscle", effect: "Tender to the touch. You suffer one level of exhaustion."}
];

const INJ_MEDIUM = [
	{name: "Hairline Arm Fracture", effect: "Arm disabled and Disadvantage on attack rolls until a Long Rest."},
	{name: "Hairline Leg Fracture", effect: "Movement halved until a Long Rest."},
	{name: "Cracked Rib", effect: "Cannot take the Dash action and one level of exhaustion until a Long Rest."},
	{name: "Unnerving Scar", effect: "Disadvantage on all Charisma checks except for Intimidation until a Long Rest."},
	{name: "Minor Internal Bleeding", effect: "Hit Die roll their minimum results. Yo suffer one level of exhaustion until a Long Rest.."},
	{name: "Concussion", effect: "Disadvantage on Int&Wis checks and saves until a Long Rest."},
	{name: "Slipped Disc", effect: "Disadvantage on Str&Dex checks and saves until a Long Rest."},
	{name: "Infected Wound", effect: "Hit point maximum is reduced by 10 for each day it festers. Magical healing or a medicine check will purify it. High chance of disease."},
	{name: "Burst Ear Drums", effect: "You suffer the Deafened condition until a Long Rest"},
	{name: "Orbital Fracture", effect: "You suffer the Blinded condition until a Long Rest."},
	{name: "Shattered Hand", effect: "Disadvantage on attack rolls and one level of exhaustion until a Long Rest."},
	{name: "Torn Muscle", effect: "You suffer two levels of exhaustion until a Long Rest."}
];

const INJ_MAJOR = [
	{name: "Broken Arm", effect: "You lose function in one arm, can only carry 1 thing in your hands at once and have Disadvantage on Sleight of Hand checks. A Long Rest + Magical healing of 2nd level or higher can fix this, otherwise weeks of rest are required."},
	{name: "Mangled Foot", effect: "You require a cane to move without falling prone at the end of your turn. If you take the Dash action you must succeed on a DC 13 Dex save or fall prone. Greater Restoration can fix this."},
	{name: "Broken Ribs", effect: "Cannot take the Dash action and suffer two levels of exhaustion. A Long Rest + Magical healing of 2nd level or higher can fix this, otherwise weeks of rest are required."},
	{name: "Hideous Scarring", effect: "Auto fail on all Charisma checks except Intimidation, which has Advantage. Children will flee at the sight of you. Guards will be suspicious of you. Animals will shy away from you. You are simply hideous. A Long Rest + Magical healing of 2nd level or higher can fix this, otherwise weeks of rest are required."},
	{name: "Shattered Kneecap", effect: "Speed is halved. Disadvantage on Dex saves. You require assistance to climb surfaces, and landing from any height more than a few feet puts you prone and ends your movement. A Long Rest + Magical healing of 2nd level or higher can fix this, otherwise weeks of rest are required."},
	{name: "Severed Hand", effect: "You lose a hand, can only carry 1 thing in your hands at once, have Disadvantage on Sleight of Hand checks. Geater Restoration can fix this."},
	{name: "Broken Leg", effect: "Speed is 5, you require a cane to move without falling prone at the end of your turn. You cannot take the Dodge action. A Long Rest + Magical healing of 2nd level or higher can fix this, otherwise weeks of rest are required."},
	{name: "Punctured Lung", effect: "Disadvantage on Str&Con saves, cannot take the Dash action. You suffer two levels of exhaustion. A Long Rest + Magical healing of 2nd level or higher can fix this, otherwise weeks of rest are required."},
	{name: "Major Internal Bleeding", effect: "Cannot use Hit Die. Suffer two levels of exhaustion. A Long Rest + Magical healing of 2nd level or higher can fix this, otherwise weeks of rest are required."},
	{name: "Soft Tissue Damage", effect: "You go last in combat, regardless of your initiative roll. You suffer two levels of exhaustion. A Long Rest + Magical healing of 2nd level or higher can fix this, otherwise weeks of rest are required."},
	{name: "Festering Wound", effect: "Hit Point maximum is reduced by 15 for each day it festers. Magical healing of 2nd level or higher purifies it. Guaranteed chance of disease."},
	{name: "System Shock", effect: "It's been a long day, and you are starting to wear thin. You suffer three levels of exhaustion."}
];

const INJ_DEADLY = [
	{name: "Shock Trauma", effect: "You immediately go unconscious and fail a death save. Your Constitution Score is reduced by 2. Downtime Recuperation + Magical healing of 5th level or higher can fix this."},
	{name: "Severed Arm", effect: "You immediately go into shock, becoming incapacitated for a turn and failing a death save. Your Strength Score is reduced by 2. Downtime Recuperation + Greater Restoration can fix this."},
	{name: "Split Skull", effect: "You are unconscious until a Long Rest. Your Wisdom Score is reduced by 2. Downtime Recuperation + Magical healing of 5th level or higher can fix this."},
	{name: "Brain Damage", effect: "You are unconscious until a Long Rest. Your intelligence Score is reduced by 2. Downtime Recuperation + Magical healing of 5th level or higher can fix this."},
	{name: "Severed Leg", effect: "You immediately go into shock, becoming incapacitated for a turn, falling prone and failing a death save. Your Dex Score is reduced by 2. Downtime Recuperation + Greater Restoration can fix this."},
	{name: "Facial Disfigurement", effect: "Your face is shred to ribbons, exposing the skull. You suffer the Blinded condition. Your Charisma Score is reduced by 2. Downtime Recuperation + Greater Restoration can fix this."},
	{name: "Massive Internal Bleeding", effect: "Cannot use Hit Die. Magical healing effects roll minimum on you. You suffer 4 levels of exhaustion. Downtime Recuperation + Greater Restoration can fix this."},
	{name: "Flayed Flesh", effect: "You gain Vulnerability to slashing, piercing and bludgeoning damage. Downtime Recuperation + Greater Restoration can fix this."},
	{name: "Muscle Death", effect: "You suffer 3 levels of exhaustion. Downtime Recuperation + Greater Restoration can fix this."},
	{name: "Broken Spine", effect: "You are incapacitated and prone. You require a DC 18 medicine check to be moved, a failure causes you to fail a death save automatically. Downtime Recuperation + Greater Restoration can fix this."},
	{name: "Crushed Windpipe", effect: "You will choke on your own blood and die at the start of your next turn, regardless of how many death saves you have. Magical healing can stabilise you, upon which you suffer 4 points of exhaustion and remain incapacitated until a Long Rest. Downtime Recuperation + Greater Restoration can fix this."},
	{name: "Don’t Fear the Reaper…", effect: "You die. Despite all you thought you had left, despite everything you never did and should have, everything you did do and wished you hadn't, the last slithers of life leave your body. You are dead."}
];