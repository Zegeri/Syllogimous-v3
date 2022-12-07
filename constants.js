let savedata = {
    "premises": 2,
    "timer": 30,
    "score": 0,
    "enableDistinction": true,
    "enableComparison": true,
    "enableSyllogism": true,
    "enableAnalogy": true,
    "enableDirection": true,
    "enableDirection3D": true,
    "enableDirection4D": true,
    "enableBinary": true,
    "enableMeaningfulWords": true,
    "enableCarouselMode": true,
    "enableTemporal": true,
    "enableNegation": true,
    "questions": []
};

const keySettingMap = {
    "p-1": "enableDistinction",
    "p-2": "enableComparison",
    "p-3": "enableSyllogism",
    "p-4": "enableAnalogy",
    "p-5": "premises",
    "p-6": "enableDirection",
    "p-7": "enableBinary",
    "p-8": "enableMeaningfulWords",
    "p-9": "enableCarouselMode",
    "p-10": "enableTemporal",
    "p-11": "enableNegation",
    "p-12": "enableDirection3D",
    "p-13": "enableDirection4D"
};

const strings = [
    "QAW",
    "QAR",
    "QAT",
    "QAP",
    "QAS",
    "QAD",
    "QAF",
    "QAG",
    "QAK",
    "QAL",
    "QAZ",
    "QAX",
    "QAC",
    "QAV",
    "QAB",
    "QAN",
    "QAM",
    "QEW",
    "QER",
    "QET",
    "QEP",
    "QES",
    "QED",
    "QEF",
    "QEG",
    "QEK",
    "QEL",
    "QEZ",
    "QEX",
    "QEC",
    "QEV",
    "QEB",
    "QEN",
    "QEM",
    "QIW",
    "QIR",
    "QIT",
    "QIP",
    "QIS",
    "QID",
    "QIF",
    "QIG",
    "QIK",
    "QIL",
    "QIZ",
    "QIX",
    "QIC",
    "QIV",
    "QIB",
    "QIN",
    "QIM",
    "QOW",
    "QOR",
    "QOT",
    "QOP",
    "QOS",
    "QOD",
    "QOF",
    "QOG",
    "QOK",
    "QOL",
    "QOZ",
    "QOX",
    "QOC",
    "QOV",
    "QOB",
    "QON",
    "QOM",
    "QUW",
    "QUR",
    "QUT",
    "QUP",
    "QUS",
    "QUD",
    "QUF",
    "QUG",
    "QUK",
    "QUL",
    "QUZ",
    "QUX",
    "QUC",
    "QUV",
    "QUB",
    "QUN",
    "QUM",
    "WAQ",
    "WAR",
    "WAT",
    "WAP",
    "WAS",
    "WAD",
    "WAF",
    "WAG",
    "WAK",
    "WAL",
    "WAZ",
    "WAX",
    "WAC",
    "WAV",
    "WAB",
    "WAN",
    "WAM",
    "WEQ",
    "WER",
    "WET",
    "WEP",
    "WES",
    "WED",
    "WEF",
    "WEG",
    "WEK",
    "WEL",
    "WEZ",
    "WEX",
    "WEC",
    "WEV",
    "WEB",
    "WEN",
    "WEM",
    "WIQ",
    "WIR",
    "WIT",
    "WIP",
    "WIS",
    "WID",
    "WIF",
    "WIG",
    "WIK",
    "WIL",
    "WIZ",
    "WIX",
    "WIC",
    "WIV",
    "WIB",
    "WIN",
    "WIM",
    "WOQ",
    "WOR",
    "WOT",
    "WOP",
    "WOS",
    "WOD",
    "WOF",
    "WOG",
    "WOK",
    "WOL",
    "WOZ",
    "WOX",
    "WOC",
    "WOV",
    "WOB",
    "WON",
    "WOM",
    "WUQ",
    "WUR",
    "WUT",
    "WUP",
    "WUS",
    "WUD",
    "WUF",
    "WUG",
    "WUK",
    "WUL",
    "WUZ",
    "WUX",
    "WUC",
    "WUV",
    "WUB",
    "WUN",
    "WUM",
    "RAQ",
    "RAW",
    "RAT",
    "RAP",
    "RAS",
    "RAD",
    "RAF",
    "RAG",
    "RAK",
    "RAL",
    "RAZ",
    "RAX",
    "RAC",
    "RAV",
    "RAB",
    "RAN",
    "RAM",
    "REQ",
    "REW",
    "RET",
    "REP",
    "RES",
    "RED",
    "REF",
    "REG",
    "REK",
    "REL",
    "REZ",
    "REX",
    "REC",
    "REV",
    "REB",
    "REN",
    "REM",
    "RIQ",
    "RIW",
    "RIT",
    "RIP",
    "RIS",
    "RID",
    "RIF",
    "RIG",
    "RIK",
    "RIL",
    "RIZ",
    "RIX",
    "RIC",
    "RIV",
    "RIB",
    "RIN",
    "RIM",
    "ROQ",
    "ROW",
    "ROT",
    "ROP",
    "ROS",
    "ROD",
    "ROF",
    "ROG",
    "ROK",
    "ROL",
    "ROZ",
    "ROX",
    "ROC",
    "ROV",
    "ROB",
    "RON",
    "ROM",
    "RUQ",
    "RUW",
    "RUT",
    "RUP",
    "RUS",
    "RUD",
    "RUF",
    "RUG",
    "RUK",
    "RUL",
    "RUZ",
    "RUX",
    "RUC",
    "RUV",
    "RUB",
    "RUN",
    "RUM",
    "TAQ",
    "TAW",
    "TAR",
    "TAP",
    "TAS",
    "TAD",
    "TAF",
    "TAG",
    "TAK",
    "TAL",
    "TAZ",
    "TAX",
    "TAC",
    "TAV",
    "TAB",
    "TAN",
    "TAM",
    "TEQ",
    "TEW",
    "TER",
    "TEP",
    "TES",
    "TED",
    "TEF",
    "TEG",
    "TEK",
    "TEL",
    "TEZ",
    "TEX",
    "TEC",
    "TEV",
    "TEB",
    "TEN",
    "TEM",
    "TIQ",
    "TIW",
    "TIR",
    "TIP",
    "TIS",
    "TID",
    "TIF",
    "TIG",
    "TIK",
    "TIL",
    "TIZ",
    "TIX",
    "TIC",
    "TIV",
    "TIB",
    "TIN",
    "TIM",
    "TOQ",
    "TOW",
    "TOR",
    "TOP",
    "TOS",
    "TOD",
    "TOF",
    "TOG",
    "TOK",
    "TOL",
    "TOZ",
    "TOX",
    "TOC",
    "TOV",
    "TOB",
    "TON",
    "TOM",
    "TUQ",
    "TUW",
    "TUR",
    "TUP",
    "TUS",
    "TUD",
    "TUF",
    "TUG",
    "TUK",
    "TUL",
    "TUZ",
    "TUX",
    "TUC",
    "TUV",
    "TUB",
    "TUN",
    "TUM",
    "PAQ",
    "PAW",
    "PAR",
    "PAT",
    "PAS",
    "PAD",
    "PAF",
    "PAG",
    "PAK",
    "PAL",
    "PAZ",
    "PAX",
    "PAC",
    "PAV",
    "PAB",
    "PAN",
    "PAM",
    "PEQ",
    "PEW",
    "PER",
    "PET",
    "PES",
    "PED",
    "PEF",
    "PEG",
    "PEK",
    "PEL",
    "PEZ",
    "PEX",
    "PEC",
    "PEV",
    "PEB",
    "PEN",
    "PEM",
    "PIQ",
    "PIW",
    "PIR",
    "PIT",
    "PIS",
    "PID",
    "PIF",
    "PIG",
    "PIK",
    "PIL",
    "PIZ",
    "PIX",
    "PIC",
    "PIV",
    "PIB",
    "PIN",
    "PIM",
    "POQ",
    "POW",
    "POR",
    "POT",
    "POS",
    "POD",
    "POF",
    "POG",
    "POK",
    "POL",
    "POZ",
    "POX",
    "POC",
    "POV",
    "POB",
    "PON",
    "POM",
    "PUQ",
    "PUW",
    "PUR",
    "PUT",
    "PUS",
    "PUD",
    "PUF",
    "PUG",
    "PUK",
    "PUL",
    "PUZ",
    "PUX",
    "PUC",
    "PUV",
    "PUB",
    "PUN",
    "PUM",
    "SAQ",
    "SAW",
    "SAR",
    "SAT",
    "SAP",
    "SAD",
    "SAF",
    "SAG",
    "SAK",
    "SAL",
    "SAZ",
    "SAX",
    "SAC",
    "SAV",
    "SAB",
    "SAN",
    "SAM",
    "SEQ",
    "SEW",
    "SER",
    "SET",
    "SEP",
    "SED",
    "SEF",
    "SEG",
    "SEK",
    "SEL",
    "SEZ",
    "SEX",
    "SEC",
    "SEV",
    "SEB",
    "SEN",
    "SEM",
    "SIQ",
    "SIW",
    "SIR",
    "SIT",
    "SIP",
    "SID",
    "SIF",
    "SIG",
    "SIK",
    "SIL",
    "SIZ",
    "SIX",
    "SIC",
    "SIV",
    "SIB",
    "SIN",
    "SIM",
    "SOQ",
    "SOW",
    "SOR",
    "SOT",
    "SOP",
    "SOD",
    "SOF",
    "SOG",
    "SOK",
    "SOL",
    "SOZ",
    "SOX",
    "SOC",
    "SOV",
    "SOB",
    "SON",
    "SOM",
    "SUQ",
    "SUW",
    "SUR",
    "SUT",
    "SUP",
    "SUD",
    "SUF",
    "SUG",
    "SUK",
    "SUL",
    "SUZ",
    "SUX",
    "SUC",
    "SUV",
    "SUB",
    "SUN",
    "SUM",
    "DAQ",
    "DAW",
    "DAR",
    "DAT",
    "DAP",
    "DAS",
    "DAF",
    "DAG",
    "DAK",
    "DAL",
    "DAZ",
    "DAX",
    "DAC",
    "DAV",
    "DAB",
    "DAN",
    "DAM",
    "DEQ",
    "DEW",
    "DER",
    "DET",
    "DEP",
    "DES",
    "DEF",
    "DEG",
    "DEK",
    "DEL",
    "DEZ",
    "DEX",
    "DEC",
    "DEV",
    "DEB",
    "DEN",
    "DEM",
    "DIQ",
    "DIW",
    "DIR",
    "DIT",
    "DIP",
    "DIS",
    "DIF",
    "DIG",
    "DIK",
    "DIL",
    "DIZ",
    "DIX",
    "DIC",
    "DIV",
    "DIB",
    "DIN",
    "DIM",
    "DOQ",
    "DOW",
    "DOR",
    "DOT",
    "DOP",
    "DOS",
    "DOF",
    "DOG",
    "DOK",
    "DOL",
    "DOZ",
    "DOX",
    "DOC",
    "DOV",
    "DOB",
    "DON",
    "DOM",
    "DUQ",
    "DUW",
    "DUR",
    "DUT",
    "DUP",
    "DUS",
    "DUF",
    "DUG",
    "DUK",
    "DUL",
    "DUZ",
    "DUX",
    "DUC",
    "DUV",
    "DUB",
    "DUN",
    "DUM",
    "FAQ",
    "FAW",
    "FAR",
    "FAT",
    "FAP",
    "FAS",
    "FAD",
    "FAG",
    "FAK",
    "FAL",
    "FAZ",
    "FAX",
    "FAC",
    "FAV",
    "FAB",
    "FAN",
    "FAM",
    "FEQ",
    "FEW",
    "FER",
    "FET",
    "FEP",
    "FES",
    "FED",
    "FEG",
    "FEK",
    "FEL",
    "FEZ",
    "FEX",
    "FEC",
    "FEV",
    "FEB",
    "FEN",
    "FEM",
    "FIQ",
    "FIW",
    "FIR",
    "FIT",
    "FIP",
    "FIS",
    "FID",
    "FIG",
    "FIK",
    "FIL",
    "FIZ",
    "FIX",
    "FIC",
    "FIV",
    "FIB",
    "FIN",
    "FIM",
    "FOQ",
    "FOW",
    "FOR",
    "FOT",
    "FOP",
    "FOS",
    "FOD",
    "FOG",
    "FOK",
    "FOL",
    "FOZ",
    "FOX",
    "FOC",
    "FOV",
    "FOB",
    "FON",
    "FOM",
    "FUQ",
    "FUW",
    "FUR",
    "FUT",
    "FUP",
    "FUS",
    "FUD",
    "FUG",
    "FUK",
    "FUL",
    "FUZ",
    "FUX",
    "FUC",
    "FUV",
    "FUB",
    "FUN",
    "FUM",
    "GAQ",
    "GAW",
    "GAR",
    "GAT",
    "GAP",
    "GAS",
    "GAD",
    "GAF",
    "GAK",
    "GAL",
    "GAZ",
    "GAX",
    "GAC",
    "GAV",
    "GAB",
    "GAN",
    "GAM",
    "GEQ",
    "GEW",
    "GER",
    "GET",
    "GEP",
    "GES",
    "GED",
    "GEF",
    "GEK",
    "GEL",
    "GEZ",
    "GEX",
    "GEC",
    "GEV",
    "GEB",
    "GEN",
    "GEM",
    "GIQ",
    "GIW",
    "GIR",
    "GIT",
    "GIP",
    "GIS",
    "GID",
    "GIF",
    "GIK",
    "GIL",
    "GIZ",
    "GIX",
    "GIC",
    "GIV",
    "GIB",
    "GIN",
    "GIM",
    "GOQ",
    "GOW",
    "GOR",
    "GOT",
    "GOP",
    "GOS",
    "GOD",
    "GOF",
    "GOK",
    "GOL",
    "GOZ",
    "GOX",
    "GOC",
    "GOV",
    "GOB",
    "GON",
    "GOM",
    "GUQ",
    "GUW",
    "GUR",
    "GUT",
    "GUP",
    "GUS",
    "GUD",
    "GUF",
    "GUK",
    "GUL",
    "GUZ",
    "GUX",
    "GUC",
    "GUV",
    "GUB",
    "GUN",
    "GUM",
    "KAQ",
    "KAW",
    "KAR",
    "KAT",
    "KAP",
    "KAS",
    "KAD",
    "KAF",
    "KAG",
    "KAL",
    "KAZ",
    "KAX",
    "KAC",
    "KAV",
    "KAB",
    "KAN",
    "KAM",
    "KEQ",
    "KEW",
    "KER",
    "KET",
    "KEP",
    "KES",
    "KED",
    "KEF",
    "KEG",
    "KEL",
    "KEZ",
    "KEX",
    "KEC",
    "KEV",
    "KEB",
    "KEN",
    "KEM",
    "KIQ",
    "KIW",
    "KIR",
    "KIT",
    "KIP",
    "KIS",
    "KID",
    "KIF",
    "KIG",
    "KIL",
    "KIZ",
    "KIX",
    "KIC",
    "KIV",
    "KIB",
    "KIN",
    "KIM",
    "KOQ",
    "KOW",
    "KOR",
    "KOT",
    "KOP",
    "KOS",
    "KOD",
    "KOF",
    "KOG",
    "KOL",
    "KOZ",
    "KOX",
    "KOC",
    "KOV",
    "KOB",
    "KON",
    "KOM",
    "KUQ",
    "KUW",
    "KUR",
    "KUT",
    "KUP",
    "KUS",
    "KUD",
    "KUF",
    "KUG",
    "KUL",
    "KUZ",
    "KUX",
    "KUC",
    "KUV",
    "KUB",
    "KUN",
    "KUM",
    "LAQ",
    "LAW",
    "LAR",
    "LAT",
    "LAP",
    "LAS",
    "LAD",
    "LAF",
    "LAG",
    "LAK",
    "LAZ",
    "LAX",
    "LAC",
    "LAV",
    "LAB",
    "LAN",
    "LAM",
    "LEQ",
    "LEW",
    "LER",
    "LET",
    "LEP",
    "LES",
    "LED",
    "LEF",
    "LEG",
    "LEK",
    "LEZ",
    "LEX",
    "LEC",
    "LEV",
    "LEB",
    "LEN",
    "LEM",
    "LIQ",
    "LIW",
    "LIR",
    "LIT",
    "LIP",
    "LIS",
    "LID",
    "LIF",
    "LIG",
    "LIK",
    "LIZ",
    "LIX",
    "LIC",
    "LIV",
    "LIB",
    "LIN",
    "LIM",
    "LOQ",
    "LOW",
    "LOR",
    "LOT",
    "LOP",
    "LOS",
    "LOD",
    "LOF",
    "LOG",
    "LOK",
    "LOZ",
    "LOX",
    "LOC",
    "LOV",
    "LOB",
    "LON",
    "LOM",
    "LUQ",
    "LUW",
    "LUR",
    "LUT",
    "LUP",
    "LUS",
    "LUD",
    "LUF",
    "LUG",
    "LUK",
    "LUZ",
    "LUX",
    "LUC",
    "LUV",
    "LUB",
    "LUN",
    "LUM",
    "ZAQ",
    "ZAW",
    "ZAR",
    "ZAT",
    "ZAP",
    "ZAS",
    "ZAD",
    "ZAF",
    "ZAG",
    "ZAK",
    "ZAL",
    "ZAX",
    "ZAC",
    "ZAV",
    "ZAB",
    "ZAN",
    "ZAM",
    "ZEQ",
    "ZEW",
    "ZER",
    "ZET",
    "ZEP",
    "ZES",
    "ZED",
    "ZEF",
    "ZEG",
    "ZEK",
    "ZEL",
    "ZEX",
    "ZEC",
    "ZEV",
    "ZEB",
    "ZEN",
    "ZEM",
    "ZIQ",
    "ZIW",
    "ZIR",
    "ZIT",
    "ZIP",
    "ZIS",
    "ZID",
    "ZIF",
    "ZIG",
    "ZIK",
    "ZIL",
    "ZIX",
    "ZIC",
    "ZIV",
    "ZIB",
    "ZIN",
    "ZIM",
    "ZOQ",
    "ZOW",
    "ZOR",
    "ZOT",
    "ZOP",
    "ZOS",
    "ZOD",
    "ZOF",
    "ZOG",
    "ZOK",
    "ZOL",
    "ZOX",
    "ZOC",
    "ZOV",
    "ZOB",
    "ZON",
    "ZOM",
    "ZUQ",
    "ZUW",
    "ZUR",
    "ZUT",
    "ZUP",
    "ZUS",
    "ZUD",
    "ZUF",
    "ZUG",
    "ZUK",
    "ZUL",
    "ZUX",
    "ZUC",
    "ZUV",
    "ZUB",
    "ZUN",
    "ZUM",
    "XAQ",
    "XAW",
    "XAR",
    "XAT",
    "XAP",
    "XAS",
    "XAD",
    "XAF",
    "XAG",
    "XAK",
    "XAL",
    "XAZ",
    "XAC",
    "XAV",
    "XAB",
    "XAN",
    "XAM",
    "XEQ",
    "XEW",
    "XER",
    "XET",
    "XEP",
    "XES",
    "XED",
    "XEF",
    "XEG",
    "XEK",
    "XEL",
    "XEZ",
    "XEC",
    "XEV",
    "XEB",
    "XEN",
    "XEM",
    "XIQ",
    "XIW",
    "XIR",
    "XIT",
    "XIP",
    "XIS",
    "XID",
    "XIF",
    "XIG",
    "XIK",
    "XIL",
    "XIZ",
    "XIC",
    "XIV",
    "XIB",
    "XIN",
    "XIM",
    "XOQ",
    "XOW",
    "XOR",
    "XOT",
    "XOP",
    "XOS",
    "XOD",
    "XOF",
    "XOG",
    "XOK",
    "XOL",
    "XOZ",
    "XOC",
    "XOV",
    "XOB",
    "XON",
    "XOM",
    "XUQ",
    "XUW",
    "XUR",
    "XUT",
    "XUP",
    "XUS",
    "XUD",
    "XUF",
    "XUG",
    "XUK",
    "XUL",
    "XUZ",
    "XUC",
    "XUV",
    "XUB",
    "XUN",
    "XUM",
    "CAQ",
    "CAW",
    "CAR",
    "CAT",
    "CAP",
    "CAS",
    "CAD",
    "CAF",
    "CAG",
    "CAK",
    "CAL",
    "CAZ",
    "CAX",
    "CAV",
    "CAB",
    "CAN",
    "CAM",
    "CEQ",
    "CEW",
    "CER",
    "CET",
    "CEP",
    "CES",
    "CED",
    "CEF",
    "CEG",
    "CEK",
    "CEL",
    "CEZ",
    "CEX",
    "CEV",
    "CEB",
    "CEN",
    "CEM",
    "CIQ",
    "CIW",
    "CIR",
    "CIT",
    "CIP",
    "CIS",
    "CID",
    "CIF",
    "CIG",
    "CIK",
    "CIL",
    "CIZ",
    "CIX",
    "CIV",
    "CIB",
    "CIN",
    "CIM",
    "COQ",
    "COW",
    "COR",
    "COT",
    "COP",
    "COS",
    "COD",
    "COF",
    "COG",
    "COK",
    "COL",
    "COZ",
    "COX",
    "COV",
    "COB",
    "CON",
    "COM",
    "CUQ",
    "CUW",
    "CUR",
    "CUT",
    "CUP",
    "CUS",
    "CUD",
    "CUF",
    "CUG",
    "CUK",
    "CUL",
    "CUZ",
    "CUX",
    "CUV",
    "CUB",
    "CUN",
    "CUM",
    "VAQ",
    "VAW",
    "VAR",
    "VAT",
    "VAP",
    "VAS",
    "VAD",
    "VAF",
    "VAG",
    "VAK",
    "VAL",
    "VAZ",
    "VAX",
    "VAC",
    "VAB",
    "VAN",
    "VAM",
    "VEQ",
    "VEW",
    "VER",
    "VET",
    "VEP",
    "VES",
    "VED",
    "VEF",
    "VEG",
    "VEK",
    "VEL",
    "VEZ",
    "VEX",
    "VEC",
    "VEB",
    "VEN",
    "VEM",
    "VIQ",
    "VIW",
    "VIR",
    "VIT",
    "VIP",
    "VIS",
    "VID",
    "VIF",
    "VIG",
    "VIK",
    "VIL",
    "VIZ",
    "VIX",
    "VIC",
    "VIB",
    "VIN",
    "VIM",
    "VOQ",
    "VOW",
    "VOR",
    "VOT",
    "VOP",
    "VOS",
    "VOD",
    "VOF",
    "VOG",
    "VOK",
    "VOL",
    "VOZ",
    "VOX",
    "VOC",
    "VOB",
    "VON",
    "VOM",
    "VUQ",
    "VUW",
    "VUR",
    "VUT",
    "VUP",
    "VUS",
    "VUD",
    "VUF",
    "VUG",
    "VUK",
    "VUL",
    "VUZ",
    "VUX",
    "VUC",
    "VUB",
    "VUN",
    "VUM",
    "BAQ",
    "BAW",
    "BAR",
    "BAT",
    "BAP",
    "BAS",
    "BAD",
    "BAF",
    "BAG",
    "BAK",
    "BAL",
    "BAZ",
    "BAX",
    "BAC",
    "BAV",
    "BAN",
    "BAM",
    "BEQ",
    "BEW",
    "BER",
    "BET",
    "BEP",
    "BES",
    "BED",
    "BEF",
    "BEG",
    "BEK",
    "BEL",
    "BEZ",
    "BEX",
    "BEC",
    "BEV",
    "BEN",
    "BEM",
    "BIQ",
    "BIW",
    "BIR",
    "BIT",
    "BIP",
    "BIS",
    "BID",
    "BIF",
    "BIG",
    "BIK",
    "BIL",
    "BIZ",
    "BIX",
    "BIC",
    "BIV",
    "BIN",
    "BIM",
    "BOQ",
    "BOW",
    "BOR",
    "BOT",
    "BOP",
    "BOS",
    "BOD",
    "BOF",
    "BOG",
    "BOK",
    "BOL",
    "BOZ",
    "BOX",
    "BOC",
    "BOV",
    "BON",
    "BOM",
    "BUQ",
    "BUW",
    "BUR",
    "BUT",
    "BUP",
    "BUS",
    "BUD",
    "BUF",
    "BUG",
    "BUK",
    "BUL",
    "BUZ",
    "BUX",
    "BUC",
    "BUV",
    "BUN",
    "BUM",
    "NAQ",
    "NAW",
    "NAR",
    "NAT",
    "NAP",
    "NAS",
    "NAD",
    "NAF",
    "NAG",
    "NAK",
    "NAL",
    "NAZ",
    "NAX",
    "NAC",
    "NAV",
    "NAB",
    "NAM",
    "NEQ",
    "NEW",
    "NER",
    "NET",
    "NEP",
    "NES",
    "NED",
    "NEF",
    "NEG",
    "NEK",
    "NEL",
    "NEZ",
    "NEX",
    "NEC",
    "NEV",
    "NEB",
    "NEM",
    "NIQ",
    "NIW",
    "NIR",
    "NIT",
    "NIP",
    "NIS",
    "NID",
    "NIF",
    "NIG",
    "NIK",
    "NIL",
    "NIZ",
    "NIX",
    "NIC",
    "NIV",
    "NIB",
    "NIM",
    "NOQ",
    "NOW",
    "NOR",
    "NOT",
    "NOP",
    "NOS",
    "NOD",
    "NOF",
    "NOG",
    "NOK",
    "NOL",
    "NOZ",
    "NOX",
    "NOC",
    "NOV",
    "NOB",
    "NOM",
    "NUQ",
    "NUW",
    "NUR",
    "NUT",
    "NUP",
    "NUS",
    "NUD",
    "NUF",
    "NUG",
    "NUK",
    "NUL",
    "NUZ",
    "NUX",
    "NUC",
    "NUV",
    "NUB",
    "NUM",
    "MAQ",
    "MAW",
    "MAR",
    "MAT",
    "MAP",
    "MAS",
    "MAD",
    "MAF",
    "MAG",
    "MAK",
    "MAL",
    "MAZ",
    "MAX",
    "MAC",
    "MAV",
    "MAB",
    "MAN",
    "MEQ",
    "MEW",
    "MER",
    "MET",
    "MEP",
    "MES",
    "MED",
    "MEF",
    "MEG",
    "MEK",
    "MEL",
    "MEZ",
    "MEX",
    "MEC",
    "MEV",
    "MEB",
    "MEN",
    "MIQ",
    "MIW",
    "MIR",
    "MIT",
    "MIP",
    "MIS",
    "MID",
    "MIF",
    "MIG",
    "MIK",
    "MIL",
    "MIZ",
    "MIX",
    "MIC",
    "MIV",
    "MIB",
    "MIN",
    "MOQ",
    "MOW",
    "MOR",
    "MOT",
    "MOP",
    "MOS",
    "MOD",
    "MOF",
    "MOG",
    "MOK",
    "MOL",
    "MOZ",
    "MOX",
    "MOC",
    "MOV",
    "MOB",
    "MON",
    "MUQ",
    "MUW",
    "MUR",
    "MUT",
    "MUP",
    "MUS",
    "MUD",
    "MUF",
    "MUG",
    "MUK",
    "MUL",
    "MUZ",
    "MUX",
    "MUC",
    "MUV",
    "MUB",
    "MUN"
];

const nouns = [
    "Ankle",
    "Ant",
    "Antlers",
    "Apartment",
    "Apple",
    "Apricot",
    "Architect",
    "Armchair",
    "Arrow",
    "Aunt",
    "Baby",
    "Back",
    "Backyard",
    "Bag",
    "Bakery",
    "Ball",
    "Balloon",
    "Bank",
    "Bar",
    "Barbie",
    "Basket",
    "Bat",
    "Beans",
    "Bear",
    "Bed",
    "Bell",
    "Belt",
    "Bermudas",
    "Bicycle",
    "Bike",
    "Bikini",
    "Bill",
    "Bird",
    "Biscuit",
    "Black",
    "Blade",
    "Blazer",
    "Blender",
    "Board",
    "Boat",
    "Bones",
    "Book",
    "Bookcase",
    "Bookstore",
    "Boots",
    "Bow",
    "Box",
    "Boxer",
    "Boy",
    "Bra",
    "Brain",
    "Brass",
    "Bread",
    "Bridge",
    "Brother",
    "Brush",
    "Bucket",
    "Buckles",
    "Buffalo",
    "Bulb",
    "Bus",
    "Butter",
    "Buttons",
    "Cabin",
    "Cabinet",
    "Cable",
    "Cafe",
    "Camera",
    "Candy",
    "Cane",
    "Cane",
    "Canoe",
    "Cap",
    "Cap",
    "Car",
    "Taxi",
    "Cardigan",
    "Carpet",
    "Cashier",
    "Casino",
    "Castle",
    "Cat",
    "Cave",
    "Cello",
    "Cement",
    "Chair",
    "Cheeks",
    "Cheese",
    "Chest",
    "Chicken",
    "Children",
    "Chips",
    "Chocolate",
    "Choker",
    "Church",
    "Cinema",
    "City",
    "Clip",
    "Clock",
    "Clothes",
    "Cloud",
    "Coconut",
    "Coffee",
    "Coin",
    "Color",
    "Comb",
    "Composer",
    "Computer",
    "Cooker",
    "Cookware",
    "Corn",
    "Costume",
    "Couch",
    "Country",
    "Cow",
    "Cravat",
    "Credenza",
    "Crest",
    "Crib",
    "Crow",
    "Cup",
    "Cucumber",
    "Cupboard",
    "Currency",
    "Cylinder",
    "Dates",
    "Daughter",
    "Deer",
    "Dentist",
    "Designer",
    "Desk",
    "Desk",
    "Desktop",
    "Detective",
    "Doctor",
    "Dog",
    "Dog",
    "Dolphin",
    "Donkey",
    "Dress",
    "Dresser",
    "Drink",
    "Drum",
    "Dust",
    "Eagle",
    "Earrings",
    "Ears",
    "Earth",
    "Egg",
    "Elephant",
    "Eraser",
    "Estate",
    "Eyes",
    "Factory",
    "Fan",
    "Fan",
    "Farm",
    "Father",
    "Film",
    "Finger",
    "Fire",
    "Fish",
    "Flag",
    "Flower",
    "Food",
    "Foot",
    "Forest",
    "Fork",
    "Fox",
    "Freezer",
    "Fridge",
    "Frog",
    "Fruit",
    "Gadgets",
    "Galaxy",
    "Garage",
    "Garden",
    "Garlic",
    "Gas",
    "Gel",
    "Gift",
    "Ginger",
    "Giraffe",
    "Girl",
    "Glass",
    "Gloves",
    "Goat",
    "Governor",
    "Gown",
    "Grains",
    "Grapes",
    "Guest",
    "Guitar",
    "Hair",
    "Hair",
    "Hamburger",
    "Hammer",
    "Hand",
    "Hat",
    "Head",
    "Heart",
    "Heels",
    "Herbs",
    "Hockey",
    "Horn",
    "Horse",
    "Hospital",
    "Host",
    "Hostel",
    "Hotel",
    "House",
    "Ice",
    "Icecream",
    "Iron",
    "Jacket",
    "Jaw",
    "Jewelry",
    "Judge",
    "Jug",
    "Juicer",
    "Jumper",
    "Kangaroo",
    "Key",
    "Keyboard",
    "Kid",
    "Kit",
    "Kite",
    "Knife",
    "Koala",
    "Lamb",
    "Lamp",
    "Laptop",
    "Lawyer",
    "Leather",
    "Leaves",
    "Leg",
    "Leggings",
    "Lemon",
    "Library",
    "Lift",
    "Light",
    "Lighter",
    "Lion",
    "Lips",
    "Lock",
    "London",
    "Luggage",
    "Lung",
    "Mall",
    "Man",
    "Mango",
    "Market",
    "Mars",
    "Medicine",
    "Milk",
    "Mirror",
    "Mobile",
    "Model",
    "Monitor",
    "Monkey",
    "Moon",
    "Moonlight",
    "Mother",
    "Motor",
    "Mountain",
    "Mouse",
    "Mouth",
    "Museum",
    "Music",
    "Musician",
    "Neck",
    "Necklace",
    "Newspaper",
    "Noise",
    "Noodles",
    "Nose",
    "Notebook",
    "Nurse",
    "Ocean",
    "Oil",
    "Onion",
    "Orange",
    "Ostrich",
    "Oven",
    "Owl",
    "Pad",
    "Pagoda",
    "Paint",
    "Painter",
    "Palm",
    "Pancake",
    "Panda",
    "Panther",
    "Pants",
    "Paper",
    "Parfume",
    "Park",
    "Park",
    "Parrot",
    "Pasta",
    "Peacock",
    "Peanut",
    "Pen",
    "Pencil",
    "Perfume",
    "Pharmacy",
    "Phone",
    "Physician",
    "Piano",
    "Pig",
    "Pigeon",
    "Pipe",
    "Pizza",
    "Plane",
    "Planet",
    "Plant",
    "Plastic",
    "Plates",
    "Police",
    "Popcorn",
    "Potato",
    "Pouch",
    "Professor",
    "Pumpkin",
    "Pyramid",
    "Rabbit",
    "Radio",
    "Rainbow",
    "Razor",
    "Remote",
    "Ribs",
    "Rice",
    "Ring",
    "River",
    "Road",
    "Road",
    "Rope",
    "Rubber",
    "Salt",
    "Salt",
    "Sand",
    "Sandals",
    "Sandals",
    "Sandwich",
    "Saw",
    "Saxophone",
    "Scale",
    "School",
    "Scissors",
    "Sea",
    "Senator",
    "Shampoo",
    "Shark",
    "Sheep",
    "Ship",
    "Shirt",
    "Shoes",
    "Shop",
    "Shorts",
    "Shoulder",
    "Shower",
    "Shrimp",
    "Singer",
    "Sink",
    "Sister",
    "Skirt",
    "Sky",
    "Slippers",
    "Smile",
    "Smoke",
    "Snowman",
    "Soap",
    "Socks",
    "Sofa",
    "Soil",
    "Son",
    "Soup",
    "Spaghetti",
    "Sparrow",
    "Spider",
    "Spoon",
    "Stadium",
    "Stair",
    "Star",
    "Station",
    "Stem",
    "Stomach",
    "Stove",
    "Street",
    "Sugar",
    "Suit",
    "Suitcase",
    "Sun",
    "Surgeon",
    "Swan",
    "Sweater",
    "Sweet",
    "Table",
    "Table",
    "Tablet",
    "Tail",
    "Tap",
    "Taxi",
    "Tea",
    "Teacher",
    "Teen",
    "Teeth",
    "Telephone",
    "Temple",
    "Tennis",
    "Theater",
    "Thread",
    "Tie",
    "Tiger",
    "Tissue",
    "Toes",
    "Tomato",
    "Tongue",
    "Tools",
    "Towel",
    "Town",
    "Toy",
    "Train",
    "Tree",
    "Trousers",
    "Truck",
    "Tunnel",
    "Turkey",
    "Turtle",
    "Umbrella",
    "Uncle",
    "Underwear",
    "Van",
    "Vase",
    "Vegetable",
    "Vehicle",
    "Vest",
    "Villa",
    "Village",
    "Violin",
    "Voice",
    "Waist",
    "Waiter",
    "Wall",
    "Wallet",
    "Watch",
    "Water",
    "Whale",
    "Wheat",
    "Whisker",
    "Window",
    "Wings",
    "Winter",
    "Wire",
    "Wolf",
    "Woman",
    "Wood",
    "Wound",
    "Wrist",
    "Xylophone",
    "Zebra",
    "Zoo"
];

const validRules = [
    "0001",
    "1011",
    "0221",
    "1231",
    "0021",
    "1031",
    "0112",
    "1012",
    "1232",
    "0332",
    "0132",
    "1032",
    "0223",
    "2023",
    "3033",
    "1233",
    "0023",
    "1033",
    "0114",
    "2024",
    "1234",
    "0134",
    "1034",
    "0024"
];

const forms = [
    [
        'All <span class="subject">$</span> is <span class="subject">$</span>',
        'No <span class="subject">$</span> is <span class="subject">$</span>',
        'Some <span class="subject">$</span> is <span class="subject">$</span>',
        'Some <span class="subject">$</span> is not <span class="subject">$</span>'
    ],
    [
        'All <span class="subject">$</span> is <span class="subject">$</span>',
        'All <span class="subject">$</span> is not <span class="subject">$</span>',
        'Some <span class="subject">$</span> is <span class="subject">$</span>',
        'Not all <span class="subject">$</span> is <span class="subject">$</span>'
    ],
];

const dirNames = [
    null,
    "North",
    "North-East",
    "East",
    "South-East",
    "South",
    "South-West",
    "West",
    "North-West"
];

const nameInverseDir = {
    "North": "South",
    "North-East": "South-West",
    "East": "West",
    "South-East": "North-West",
    "South": "North",
    "South-West": "North-East",
    "West": "East",
    "North-West": "South-East"
};

const dirCoords = [
    [ 0,  0],
    [ 0, -1],
    [ 1, -1],
    [ 1,  0],
    [ 1,  1],
    [ 0,  1],
    [-1,  1],
    [-1,  0],
    [-1, -1]
];

const timeNames = ['was', 'is', 'will be'];