const Member = require('../models/member');
const mailgun = require('../utils/mailgun');

const addMember = async (data) => {
    let member = new Member({ ...data });
    await member.save();
    return member;
}

const addMembers = async () => {
    const arr = [
        {
                        firstName: "Agud-Popa Mihaiela",
            CNP: "2770307052153",
            address: "Oradea, str. I. Cantacuzino, nr. 8E, ap. 2, jud. Bihor",
            FunctieCasaGradatia: "inspector superior I/4",
            DGRFP: "AJFP Bihor",
            joinedId: "26.06.2017",
            email: "mihaela.agud.bh@anaf.ro"
        },
        {
                        firstName: "Alexandrescu Camelia",
            CNP: "2590306060764",
            address: "Bistrita,str. V.Pirvan nr 16, jud. Bistrita-Nasaud",
            FunctieCasaGradatia: "consilier superior I/5",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "19.06.2017",
            email: "camelia.alexandrescu.cj@anaf.ro"
        },
        {
                        firstName: "Almasan Daniel Mircea",
            CNP: "1731005120662",
            address: "Floresti, str. Urusagului, nr. 17, bloc 8, ap. 1",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "26.06.2017"
        },
        {
                        firstName: "Andres Luminita Maria",
            CNP: "2650212120019",
            address: "Campia Turzii, str. Eroilor, nr. 11, jud. Cluj",
            FunctieCasaGradatia: "consilier superior",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "25.09.2017",
            email: "luminita.andres.cj@anaf.ro"
        },
        {
                        firstName: "Anghel Ramona",
            CNP: "2800224125821",
            address: "Cluj-Napoca, str. Timisului, nr. 79, ap. 7",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "12.04.2018",
            email: "ramona.anghel.cj@anaf.ro"
        },
        {
                        firstName: "Antal Dorina",
            CNP: "2611216120640",
            address: "Cluj Napoca, Bd. 21 Decembrie 1989 nr 13,ap 95",
            FunctieCasaGradatia: "consilier superior I/5",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "26.06.2017",
            email: "dorina.antal.cj@anaf.ro"
        },
        {
                        firstName: "Apavaloaiei Ioana Elena",
            CNP: "2750927203146",
            address: "Cluj Napoca, Colonia Borhanci FN",
            FunctieCasaGradatia: "consilier superior I/4",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "26.06.2017",
            email: "ioana.apavaloaiei.cj@anaf.ro"
        },
        {
                        firstName: "Ardelean Daniela",
            CNP: "2670317301975",
            address: "Satu Mare, str. Paris nr 71, jud. Satu Mare",
            FunctieCasaGradatia: "inspector principal I/5",
            DGRFP: "AJFP Satu Mare",
            joinedId: "10.07.2017",
            email: "daniela.ardelean.sm@anaf.ro"
        },
        {
                        firstName: "Astefani Florin Marius",
            CNP: "1780516241344",
            address: "Satu Mare, str. Jocului nr 1, ap 3, jud. Satu Mare",
            FunctieCasaGradatia: "inspector superior I/4",
            DGRFP: "AJFP Satu Mare",
            joinedId: "11.07.2017",
            email: "marius.astefani.sm@ana.ro"
        },
        {
                         firstName: "Baba Cristina",
            CNP: "2751029120726",
            address: "Cluj Napoca, str. Capitan Grigore Ignat nr 24",
            FunctieCasaGradatia: "inspector superior I/4",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "26.06.2017",
            email: "cristina.baba.cj@anaf.ro"
        },
        {
                         firstName: "Babici Letitia",
            CNP: "2690815301990",
            address: "Satu Mare, str. Ceahlaului nr. 2, ap 5, jud. Satu Mare",
            FunctieCasaGradatia: "inspector superior I/5",
            DGRFP: "AJFP Satu Mare",
            joinedId: "11.07.2017",
            email: "ltitia.babici.cdgrfpcj@anaf.ro"
        },
        {
                         firstName: "Baicu Ramona Mirela",
            CNP: "2750207052858",
            address: "Oradea, str. Nufarului, nr. 27, ap. 16, jud. Bihor",
            FunctieCasaGradatia: "consilier superior I/4",
            DGRFP: "AJFP Bihor",
            joinedId: "26.06.2017",
            email: "ramona.baicu.bh@anaf.ro"
        },
        {
                         firstName: "Bako Diana-Simona",
            CNP: "2741129301998",
            address: "Satu Mare, P-ta Soareluinr. 16 ap. 4, jud. Satu Mare",
            FunctieCasaGradatia: "consilier superior I/5",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "26.02.2018",
            email: "diana.bako.cj@anaf.ro"
        },
        {
                         firstName: "Balaj Cristina Ionela",
            CNP: "2701129193784",
            address: "Cluj-Napoca, str. Constantin Brancusi, nr. 172, ap. 72",
            FunctieCasaGradatia: "inspector superior I/5",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "16.02.2018",
            email: "cristina.balaj.cj@anaf.ro"
        },
        {
                         firstName: "Balas Olga Felicia",
            CNP: "2720917126205",
            address: "Floresti, str. Avram Iancu, nr. 51, jud. Cluj",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "28.03.2019",
            email: "olga.balas.cj@anaf.ro"
        },
        {
                         firstName: "Balint Lenuta",
            CNP: "2660401120649",
            address: "Cluj Napoca, str. Aurel Vlaicu nr 58, ap 18",
            FunctieCasaGradatia: "inspector superior I/5",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "26.06.2017",
            email: "lenuta.balint.cj@anaf.ro"
        },
        {
                         firstName: "Ban Eugenia Simona",
            CNP: "2690319124038",
            address: "Gherla, str. Mintiului nr. 6, ap. 9, jud. Cluj",
            FunctieCasaGradatia: "consilier superior",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "19.02.2019",
            email: "simona.ban.cj@anaf.ro"
        },
        {
                         firstName: "Barbos Gabriela",
            CNP: "2730923120688",
            address: "Cluj Napoca, str. Nicolae Titulescu, nr. 28, ap 33",
            FunctieCasaGradatia: "inspector debutant",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "26.06.2017",
            email: "gabriela.barbos.cj@anaf.ro"
        },
        {
                         firstName: "Bartolomucci Catalina Gabriela",
            CNP: "2730905126210",
            address: "Turda, str. Castanilor nr. 5, jud. Cluj",
            FunctieCasaGradatia: "consilier superior I/5",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "22.06.2017",
            email: "Gabriela Bartolomucci/dgfpcfscj/cj/anaf.ro"
        },
        {
                         firstName: "Becheanu Radu Gabriel",
            CNP: "1810513420057",
            address: "Bucuresti, str. Stoian Militaru, nr. 103, bl. 1 ap. 4",
            DGRFP: "DGRFP Bucuresti",
            joinedId: "09.07.2019",
            email: "radu.becheanu.S4@anaf.ro"
        },
        {
                         firstName: "Bejan Adina Rodica",
            CNP: "2631003054675",
            address: "Oradea, str. Mestesugarilor, nr. 1, jud. Bihor",
            FunctieCasaGradatia: "consilier superior I/5",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "26.06.2017",
            email: "adina.bejan.dgrfpcj@anaf.ro"
        },
        {
                         firstName: "Beltechi Ramona Florina",
            CNP: "2780727057068",
            address: "Salonta, str. Republicii, nr. 102, ap. 2, jud. Bihor",
            FunctieCasaGradatia: "inspector superior I/4",
            DGRFP: "AJFP Bihor",
            joinedId: "22.06.2017",
            email: "Ramona Beltechi/DGFPCFSBH/BH/MFINANTE"
        },
        {
                         firstName: "Belu Nicolae",
            CNP: "1660411126192",
            address: "Cluj Napoca, str. Padurii nr 12, ap 21",
            FunctieCasaGradatia: "consilier superior I/5",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "16.03.2018",
            email: "nicolae.belu.cj@anaf.ro"
        },
        {
                         firstName: "Bene Veronica",
            CNP: "2590611054652",
            address: "Oradea, str. Narciselor, nr. 42, jud. Bihor",
            FunctieCasaGradatia: "sef serviciu grad II",
            DGRFP: "AJFP Bihor",
            joinedId: "26.06.2017",
            email: "veronica.bene.bh@anaf.ro"
        },
        {
                         firstName: "Bichis Cornelia Steluta",
            CNP: "2610212126201",
            address: "Turda, str. Potaisa nr 24, jud Cluj",
            FunctieCasaGradatia: "sef serviciu grad II/5",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "25.09.2017",
            email: "cornelia.bichis.cj@anaf.ro"
        },
        {
                         firstName: "Bistrean Mirela",
            CNP: "2631125054659",
            address: "Oradea, str. B. St. Delavrancea, nr. 24A, jud. Bihor",
            FunctieCasaGradatia: "consilier superior I/5",
            DGRFP: "AJFP Bihor",
            joinedId: "26.06.2017",
            email: "mirela.bistrean.bh@anaf.ro"
        },
        {
                         firstName: "Bizgu Andreea Antoaneta",
            CNP: "2730925450013",
            address: "Bucuresti, Soseaua Viilor, nr. 78-88, ap. 44",
            FunctieCasaGradatia: "consilier superior",
            DGRFP: "ANPAPC/ANAF",
            joinedId: "26,06,2017",
            email: "andea.bizgu@yahoo.com"
        },
        {
                         firstName: "Blejan Daniela Cornelia",
            CNP: "2711230441529",
            address: "Gherla, str. Clujului nr. 4A, ap 4, jud. Cluj",
            FunctieCasaGradatia: "sef birou grad I/5",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "23.06.2017",
            email: "daniela.blejan.cj@anaf.ro"
        },
        {
                         firstName: "Bobe Ionela",
            CNP: "2690708521600",
            address: "Loc. Ogrezeni, str. Principala, nr. 270, jud. Giurgiu",
            DGRFP: "DGRFP Ploiesti",
            joinedId: "03.10.2017",
            email: "ionela.bobe.gr@anaf.ro"
        },
        {
                         firstName: "Bocean Lucica",
            CNP: "2640504120652",
            address: "Cluj Napoca, str. Scortarilor nr 11, ap 58",
            FunctieCasaGradatia: "inspector superior I/5",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "26.06.2017",
            email: "lucica.bocean.cj@anaf.ro"
        },
        {
                         firstName: "Bocereg Ioana Raluca",
            CNP: "2840623313523",
            address: "Cluj-Napoca, str. Colinei nr. 26, ap. 16",
            FunctieCasaGradatia: "inspector principal I/2",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "19.05.2017",
            email: "raluca.bocereg.cj@anaf.ro"
        },
        {
                         firstName: "Bodan Maria",
            CNP: "2660324120660",
            address: "Cluj-Napoca, str. Al. Papiu I., nr. 39",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "02.02.2018",
            email: "maria.bodan.cj@naf.ro"
        },
        {
                         firstName: "Bogdan Anamaria",
            CNP: "2771120301963",
            address: "Satu Mare, str. Grigore Ureche nr. 1",
            FunctieCasaGradatia: "inspector superior I/3",
            DGRFP: "AJFP Satu Mare",
            joinedId: "10.07.2017",
            email: "anamaria.bogdan.sm@anaf.ro"
        },
        {
                         firstName: "Boldor Angela Adriana",
            CNP: "2630919120666",
            address: "Cluj Napoca, Calea Dorobantilor nr 19 ap 2",
            FunctieCasaGradatia: "consilier superior I/5",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "16.03.2018",
            email: "angela.boldor.cj@naf.ro"
        },
        {
                         firstName: "Bonat Ioan",
            CNP: "1600318054651",
            address: "Oradea, str. G. Galilei, nr. 12, ap. 19, jud. Bihor",
            FunctieCasaGradatia: "consilier superior I/5",
            DGRFP: "AJFP Bihor",
            joinedId: "26.06.2017",
            email: "ioan.bonat.bh@anaf.ro"
        },
        {
                         firstName: "Branzas Gelu",
            CNP: "1731229054674",
            address: "Oradea, str. Stefan Cel Mare, nr. 67, jud. Bihor",
            FunctieCasaGradatia: "consilier superior I/4",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "09.11.2017",
            email: "gelu.branzas.bh@anaf.ro"
        },
        {
                         firstName: "Bucea Marinela",
            CNP: "2710709120647",
            address: "Cluj-Napoca, str. Tudor Vladimirescu, nr. 11",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "06.02.2018",
            email: "marinela.bucea.cj@anaf.ro"
        },
        {
                         firstName: "Bugnar Hanelore Loredana",
            CNP: "2780528301983",
            address: "Cluj Napoca, Calea Floresti nr. 75, ap 3",
            FunctieCasaGradatia: "inspector principal I/3",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "26.06.2017",
            email: "hanelore.bugnar.cj@anaf.ro"
        },
        {
                         firstName: "Bumbu Ligia Maria",
            CNP: "2750209120668",
            address: "Cluj-Napoca, str. Izlazului, nr. 18, ap. 186",
            FunctieCasaGradatia: "consilier superior I/4",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "20.06.2017",
            email: "ligia.bumbu.cj@anaf.ro"
        },
        {
                         firstName: "Busuioc Gratiela",
            CNP: "2661220120691",
            address: "Cluj-Napoca, Bd. 21 Decembrie 1989, nr. 135, ap. 81",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "12.04.2018",
            email: "gratiela.busuioc.cj@anaf.ro"
        },
        {
                         firstName: "Cadis Sorina Mihaela",
            CNP: "2680209120746",
            address: "Cluj Napoca, str. Alexandru Macedonski, nr. 6F",
            FunctieCasaGradatia: "consilier superior I/5",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "26.06.2017",
            email: "sorina.cadis.cj@anaf.ro"
        },
        {
                         firstName: "Calugar Gabriel Marius",
            CNP: "1771212120707",
            address: "Floresti, str. Sub Cetate nr 131 ap 2, jud. Cluj",
            FunctieCasaGradatia: "consilier superior I/4",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "12.05.2017",
            email: "marius.calugar.cj@anaf.ro"
        },
        {
                         firstName: "Campian Codruta Doina",
            CNP: "2800701124990",
            address: "Campia Turzii, str. Teilor, nr. 28, jud. Cluj",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "24.12.2018",
            email: "codruta.campian.cj@anaf.ro"
        },
        {
                         firstName: "Catuna Georgel-Alexandru",
            CNP: "1880407336527",
            address: "Manastirea Humor, str. Stefan cel Mare, nr. 283",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "08.11.2017",
            email: "georgel.catuna.cj@anaf.ro"
        },
        {
                         firstName: "Chendean Gabriela",
            CNP: "2650505060770",
            address: "Dej, str. George Cosbuc, nr. 19, jud. Cluj",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "07.02.2018"
        },
        {
                         firstName: "Chereches Andrei Octavian",
            CNP: "1670220312959",
            address: "Zalau, str Ion Creanga, nr. 8, jud. Salaj",
            DGRFP: "AJFP Salaj",
            joinedId: "10.01.2020"
        },
        {
                         firstName: "Cheregi Gheorghe Andrei",
            CNP: "1800420054774",
            address: "Oradea, Bd. Dacia, nr. 26, ap. 18, jud. Bihor",
            FunctieCasaGradatia: "inspector superior I/4",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "26.06.2017",
            email: "andrei.cheregi.bh@anaf.ro"
        },
        {
                         firstName: "Chiorean Adriana",
            CNP: "2620310126208",
            address: "Turda, str. Constructorilor nr. 4, ap. 1, jud. Cluj",
            FunctieCasaGradatia: "consilier superior I/5",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "15/03/2018",
            email: "adriana.chiorean.cj@anaf.ro"
        },
        {
                         firstName: "Chiorean Floarea Firuta",
            CNP: "2620215050011",
            address: "Cluj Napoca, Str. Liviu Rebreanu, nr. 2, ap. 21",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "28/01/2019",
            email: "floarea.chiorean.cj@anaf.ro"
        },
        {
                         firstName: "Chiorean Maria",
            CNP: "2591117120657",
            address: "Cluj Napoca, str. N.Titulescu nr 8, ap 38",
            FunctieCasaGradatia: "expert superior I/5",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "15.05.2017",
            email: "maria.chiorean.cj@anaf.ro"
        },
        {
                         firstName: "Chis Sebastian",
            CNP: "1810320125909",
            address: "Cluj Napoca, Colonia Faget nr. 6A",
            FunctieCasaGradatia: "inspector superior I/3",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "26.06.2017",
            email: "sebastian.chis.cj@anaf.ro"
        },
        {
                         firstName: "Cimpean Alindora Diana",
            CNP: "2730517120654",
            address: "Cluj Napoca, Mehedinti nr 41 ,bl N2 sc 2 ap 31",
            FunctieCasaGradatia: "consilier superior I/4",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "26.06.2017",
            email: "diana.campean.cj@anaf.ro"
        },
        {
                         firstName: "Ciortea Emilia Tatiana ",
            CNP: "2610426120693",
            address: "Cluj Napoca, Calea Manastur nr. 78",
            FunctieCasaGradatia: "Consilier superior I/5",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "26.05.2017",
            email: "tatiana.ciortea.cj@anaf.ro"
        },
        {
                         firstName: "Cipcigan Corina Livia",
            CNP: "2700507120726",
            address: "Chinteni, str. Principala, nr. 631, jud. Cluj",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "02.02.2018",
            email: "corina.cipcigan.cj@anaf.ro"
        },
        {
                         firstName: "Cipcigan Cristina Monica ",
            CNP: "2710331120743",
            address: "Cluj Napoca, str. Plopilor nr. 42 ap 23",
            FunctieCasaGradatia: "consilier superior I/5",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "26.06.2017",
            email: "cristina.cipcigan.cj@anaf.ro"
        },
        {
                         firstName: "Cireap Fidelia Rodica",
            CNP: "2630119054653",
            address: "Oradea, str. Olimpiadei, nr. 7B, ap. 16, jud. Bihor",
            FunctieCasaGradatia: "sef serviciu grad II/5",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "26.06.2017",
            email: "fidelia.cireap.bh@anaf.ro"
        },
        {
                         firstName: "Ciui Cristina",
            CNP: "2630331126197",
            address: "Turda, str. Hategului nr 14, jud. Cluj",
            FunctieCasaGradatia: "consilier superior I/5",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "30.05.2017",
            email: "cristina.ciui.cj@anaf.ro"
        },
        {
                         firstName: "Ciupa Georgeta Dorina",
            CNP: "2600817054667",
            address: "Oradea, Bd. Decebal, nr. 21, ap. 8, jud. Bihor",
            FunctieCasaGradatia: "inspector superior I/5",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "26.06.2017",
            email: "georgeta.ciupa.bh@anaf.ro"
        },
        {
                         firstName: "Cocis Dalia",
            CNP: "2741124120672",
            address: "Cluj-Napoca, str. Sitarilor, nr. 31",
            FunctieCasaGradatia: "inspector superior",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "31.01.2018",
            email: "dalia.cocis.cj@anaf.ro"
        },
        {
                         firstName: "Cocis Gabriela Daniela",
            CNP: "2730920124038",
            address: "Cluj-Napoca, str. Calistrat Hogas, nr. 7A corp C3",
            FunctieCasaGradatia: "consilier superior I/5",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "20.06.2017",
            email: "gabriela.cocis.cj@anaf.ro"
        },
        {
                         firstName: "Cojocaru Angela",
            CNP: "2681123010316",
            address: "Dezmir, str. Labului nr. 12 A, jud. Cluj",
            FunctieCasaGradatia: "inspector superior I/5",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "23.05.2017",
            email: "angela.cojocaru.cj@anaf.ro"
        },
        {
                         firstName: "Coman Cristina Diana",
            CNP: "2921205243839",
            address: "Viseu De Jos, str Principala nr. 432, jud. Maramures",
            FunctieCasaGradatia: "inspector debutant",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "26.06.2017",
            email: "diana.coman.cj@anaf.ro"
        },
        {
                         firstName: "Constantin Anca",
            CNP: "2721103384201",
            address: "Cluj Napoca, bd. 21 Decembrie 1989, nr 129, ap 6",
            FunctieCasaGradatia: "consilier superior I/4",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "31.05.2017",
            email: "anca.constantin.cj@anaf.ro"
        },
        {
                         firstName: "Corches Cristina Elena",
            CNP: "2721110120688",
            address: "Cluj Napoca, str. Pablo Picasso nr 4 ",
            FunctieCasaGradatia: "consilier superior I/4",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "30.05.2017",
            email: "cristina.corches.cj@anaf.ro"
        },
        {
                         firstName: "Cornoiu Sorina",
            CNP: "2671225126231",
            address: "Cluj Napoca, str. Bucovina nr 4",
            FunctieCasaGradatia: "consilier superior I/5",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "01.02.2017",
            email: "sorina.cornoiu.cj@anaf.ro"
        },
        {
                         firstName: "Coros Cornelia",
            CNP: "2670206120694",
            address: "Floresti, str. Florilor, nr. 190, ap.51",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "24/12/2018",
            email: "cornelia.coros.cj@anaf.ro"
        },
        {
                         firstName: "Cosma Claudia Morgana",
            CNP: "2730714120645",
            address: "Floresti, str. Muzeul Apei, nr. 9, jud. Cluj",
            FunctieCasaGradatia: "consilier superior I/4",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "21/02/2017",
            email: "claudia.cosma.cj@anaf.ro"
        },
        {
                         firstName: "Cosma Liana Narcisa",
            CNP: "2751111120650",
            address: "Cluj Napoca, Calea Floresti nr 3, ap 110",
            FunctieCasaGradatia: "consilier superior I/5",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "22.06.2017",
            email: "liana.cosma.cj@anaf.ro"
        },
        {
                         firstName: "Costas Nicoleta",
            CNP: "2660311054653",
            address: "Oradea, str. Episcop Ioan, nr. 12",
            FunctieCasaGradatia: "consilier superior I/5",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "01.04.2018",
            email: "nicoleta.costas.bh@anaf.ro"
        },
        {
                         firstName: "Covaci-Roman Ligia",
            CNP: "2830703125829",
            address: "Cluj-Napoca, str. Straja, nr. 8",
            FunctieCasaGradatia: "inspector principal I/3",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "25.05.2017",
            email: "ligia.covaci-roman.cj@anaf.ro"
        },
        {
                         firstName: "Crisan Alina Corina",
            CNP: "2700908120723",
            address: "Mociu, nr. 257, jud. Cluj",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "02.02.2018",
            email: "alina.crisan.cj@anaf.ro"
        },
        {
                         firstName: "Crisan Lucia Elena",
            CNP: "2700728322244",
            address: "Cluj Napoca, str. Dragos Voda 39",
            FunctieCasaGradatia: "inspector principal I/5",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "26.06.2017",
            email: "lucia.crisan.cj@anaf.ro"
        },
        {
                         firstName: "Crisan Maria",
            CNP: "2690509120032",
            address: "Turda, str. Aviatorilor, nr. 3, ap. 28",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "02.02.2018",
            email: "maria.crisan.cj@anaf.ro"
        },
        {
                         firstName: "Cristea Laura Roxana",
            CNP: "2850822125480",
            address: "Cluj-Napoca, B-dul 21 Decembrie 1989, nr. 133, ap. 64",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "17.12.2019",
            email: "laura.cristea.cj@anaf.ro"
        },
        {
                         firstName: "Csuros Mia",
            CNP: "2630501312969",
            address: "Zalau, str. L. Kossuth, nr. 22, jud. Salaj",
            DGRFP: "AJFP Salaj",
            joinedId: "09.01.2020",
            email: "mia.csuros.sj@anaf.ro"
        },
        {
                         firstName: "Cuc Elena",
            CNP: "2710930126225",
            address: "Campia Turzi, str. Petru Maior nr 47, jud. Cluj",
            FunctieCasaGradatia: "inspector principal I/4",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "12.10.2017",
            email: "elena.cuc.cj@anaf.ro"
        },
        {
                         firstName: "Dan Petru",
            CNP: "1570815051091",
            address: "Beius, str. Trandafirilor, nr. 3, jud. Bihor",
            FunctieCasaGradatia: "consilier superior I/5",
            DGRFP: "AJFP Bihor",
            joinedId: "23.06.2017",
            email: "petru.dan.bh@anaf.ro"
        },
        {
                         firstName: "Dansa Ciprian Florin",
            CNP: "1761216050029",
            address: "Oradea, str. Apostol Andrei, nr. 85, jud. Bihor",
            FunctieCasaGradatia: "inspector superior I/4",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "26.06.2017",
            email: "ciprian.dansa.bh@anaf.ro"
        },
        {
                         firstName: "David Elvira",
            CNP: "2610720120735",
            address: "Apahida, str. Pietroasa, nr. 17, jud. Cluj",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "13.11.2018",
            email: "elvira.david.cj@anaf.ro"
        },
        {
                         firstName: "Demian Olimpia",
            CNP: "2730521301991",
            address: "Satu Mare, Piata 25 Octombrie bl 12 ap 17, jud. Satu Mare",
            FunctieCasaGradatia: "sef birou grad II/5",
            DGRFP: "AJFP Satu Mare",
            joinedId: "11.07.2017",
            email: "olimpia.demian.sm@anaf.ro"
        },
        {
                         firstName: "Dobos Horia",
            CNP: "1740712120670",
            address: "Cluj-Napoca, str. Ariesului, nr. 73",
            FunctieCasaGradatia: "consilier superior I/4",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "10.05.2017",
            email: "horia.dobos.cj@anaf.ro"
        },
        {
                         firstName: "Domsa Argentina",
            CNP: "2750125120656",
            address: "Salicea nr. 77G, jud. Cluj",
            FunctieCasaGradatia: "inspector superior I/4",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "26.06.2017",
            email: "argentina.domsa.cj@anaf.ro"
        },
        {
                         firstName: "Domsa Delia",
            CNP: "2670805126192",
            address: "Cluj Napoca, BD. 21 Decembrie nr 152 ap 77",
            FunctieCasaGradatia: "consilier superior I/5",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "26.06.2017",
            email: "delia.domsa.cj@anaf.ro"
        },
        {
                         firstName: "Dragan Cristina Ana",
            CNP: "2671023126191",
            address: "Turda, str. Alexandru Ioan Cuza nr 68",
            FunctieCasaGradatia: "consilier superior I/5",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "30.05.2017",
            email: "cristina.dragan.cj@anaf.ro"
        },
        {
                         firstName: "Dragan Maria",
            CNP: "2571224120643",
            address: "Cluj-Napoca, str. Gheorghe Dima, nr. 6, ap. 10",
            FunctieCasaGradatia: "consilier superior I/5",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "19.05.2017",
            email: "maria.dragan.cj@anaf.ro"
        },
        {
                         firstName: "Draghici Mariana",
            CNP: "2640908120658",
            address: "Cluj-napoca, str. Aurel Vlaicu, nr. 4, ap. 77",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "26.03.2019",
            email: "mariana.draghici.cj@anaf.ro"
        },
        {
                         firstName: "Dragomir Florentina Dana",
            CNP: "2631030054665",
            address: "Oradea, Bd. Dacia, nr. 26, ap. 6, jud. Bihor",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "13.01.2020",
            email: "florentina.dragomir.Bh@anaf.ro"
        },
        {
                         firstName: "Dragonici Dan",
            CNP: "1820512125816",
            address: "Cluj Napoca, str. Dejului nr 24",
            FunctieCasaGradatia: "inspector asistent I/2",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "20.12.2018",
            email: "dan.dragonici.cj@anaf.ro"
        },
        {
                         firstName: "Dragos Viorel",
            CNP: "1610316240042",
            address: "Satu Mare, str Wolfenbuttel, nr. 90, jud Satu Mare",
            FunctieCasaGradatia: "consilier superior",
            DGRFP: "AJFP Satu Mare",
            joinedId: "28.02.2018",
            email: "viorel.dragos.sm@anaf.ro"
        },
        {
                         firstName: "Dumitrache Florentina",
            CNP: "2600927191322",
            address: "Floresti, str. Urusagului, nr. 117, ap. d/2",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "26.03.2019",
            email: "florentina.dumitrache.cj@anaf.ro"
        },
        {
                         firstName: "Ecsedi Adrian Antoniu",
            CNP: "1760423311811",
            address: "Cluj-Napoca, str. Gr. Alexandrescu, nr. 40, ap. 27",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "20.12.2018",
            email: "adrian.ecsedi.cj@anaf.ro"
        },
        {
                         firstName: "Enache Magdalena-Ana",
            CNP: "2730409120642",
            address: "Baciu, str. Ciocarliei, nr. 23, ap. 1, jud. Cluj",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "13.11.2018",
            email: "magdalena.enache.cj@anaf.ro"
        },
        {
                         firstName: "Farcas Carmen Ramona",
            CNP: "2790211120711",
            address: "Cluj Napoca, str. Timisului nr 34 A",
            FunctieCasaGradatia: "inspector superior I/4",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "31.05.2017",
            email: "ramona.farcas.cj@anaf.ro"
        },
        {
                         firstName: "Felecan Monica",
            CNP: "2660513300015",
            address: "Cluj-Napoca, str. Pamfiliu Teodor, nr. 11",
            FunctieCasaGradatia: "consilier superior",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "26.01.2017",
            email: "monica.felecan.cj@anaf.ro"
        },
        {
                         firstName: "Filimon Maria Leonora",
            CNP: "2680215054673",
            address: "Oradea, str. Henri Coanda, nr. 20 ap. 4, jud. Bihor",
            FunctieCasaGradatia: "consilier superior I/5",
            DGRFP: "AJFP Bihor",
            joinedId: "26.06.2017"
        },
        {
                         firstName: "Florut Ana Lacramioara",
            CNP: "2680808013917",
            address: "Oradea, str. Nufarului, nr. 82, ap.15, jud. Bihor",
            FunctieCasaGradatia: "consilier superior I/5",
            DGRFP: "AJFP Bihor",
            joinedId: "26.06.2017",
            email: "ana.florut.bh@anaf.ro"
        },
        {
                         firstName: "Fodor Ciprian-Sever-George",
            CNP: "1760423054660",
            address: "Oradea, str. Sovata, nr. 28, ap. 15, jud. Bihor",
            FunctieCasaGradatia: "inspector superior I/4",
            DGRFP: "AJFP Bihor",
            joinedId: "26.06.2017",
            email: "ciprian.fodor.bh@anaf.ro"
        },
        {
                         firstName: "Gadalean Codruta Daniela",
            CNP: "2730903060788",
            address: "Floresti, str. Somesului nr 47, jud. Cluj",
            FunctieCasaGradatia: "sef serviciu grad I/4",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "19.05.2017",
            email: "codruta.gadalean.cj@anaf.ro"
        },
        {
                         firstName: "Ghejan Gabriela",
            CNP: "2720829120017",
            address: "Turda, str. macilor, nr. 9, bl. K4, ap. 36, jud. Cluj",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "31.07.2019",
            email: "gabriela.ghejan.cj@anaf.ro"
        },
        {
             
            firstName: "Gherman Adina-Alexandra",
            CNP: "2651019120652",
            address: "Cluj-Napoca, str. Nicolae Titulescu, nr. 16, ap. 8",
            FunctieCasaGradatia: "consilier superior I/5",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "29.06.2017",
            email: "adina.gherman.cj@anaf.ro"
        },
        {
             
            firstName: "Giurgiu Mariana Monica",
            CNP: "2690219125191",
            address: "Agirescu str. Fabirici bl 82, ap 4, jud. Cluj",
            FunctieCasaGradatia: "consilier superior I/5",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "26.06.2017",
            email: "mariana.giurgiu.cj@anaf.ro"
        },
        {
             
            firstName: "Glod Luminita Bianca",
            CNP: "2741207126201",
            address: "Turda, str. Teilor nr. 4A, jud. Cluj",
            FunctieCasaGradatia: "consilier superior I/4",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "23.05.2017",
            email: "bianca.glod.cj@anaf.ro"
        },
        {
             
            firstName: "Goia Ioan Daniel",
            CNP: "1681029125203",
            address: "Cluj Napoca, str. Agricultorilor nr. 52, ap 1",
            FunctieCasaGradatia: "consilier superior I/5",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "15.03.2018"
        },
        {
             
            firstName: "Goia Maria Mihaela",
            CNP: "2750103267391",
            address: "Cluj Napoca, str. Dambovitei nr 15, ap 2",
            FunctieCasaGradatia: "inspector superior I/4",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "22.06.2017",
            email: "mihaela.goia.cj@anaf.ro"
        },
        {
             
            firstName: "Goian Carmen Mariana",
            CNP: "2821026054759",
            address: "Oradea, str. Galileo Galilei, nr. 26, ap7, jud. Bihor",
            FunctieCasaGradatia: "inspector principal I/3",
            DGRFP: "AJFP Bihor",
            joinedId: "02.04.2018",
            email: "carmen.goian.bh@anaf.ro"
        },
        {
             
            firstName: "Groza Rodica",
            CNP: "2611105054694",
            address: "Oradea, str. Milcovului, nr. 20, ap.7, jud. Bihor",
            FunctieCasaGradatia: "consilier superior I/5",
            DGRFP: "AJFP Bihor",
            joinedId: "26.06.2017",
            email: "rodica.groza.bh@anaf.ro"
        },
        {
             
            firstName: "Gudea Mirela Dorica",
            CNP: "2690914120688",
            address: "Cluj Napoca, str. Grigore Alexandrescu nr 19 ,ap 17",
            FunctieCasaGradatia: "inspector superior I/5",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "26.06.2017",
            email: "Mirela.Gudea.CJ@anaf.ro"
        },
        {
             
            firstName: "Gurzau Lucia Maria",
            CNP: "2630825120720",
            address: "Cluj Napoca, str. Izvorului nr 15",
            FunctieCasaGradatia: "consilier superior I/5",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "26.06.2017",
            email: "Lucia.Gurzau.CJ@anaf.ro"
        },
        {
             
            firstName: "Guset Mariana",
            CNP: "2650525125186",
            address: "Cluj-Napoca, str. Calea Floresti, nr. 2B, ap. 15",
            FunctieCasaGradatia: "consilier superior",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "21.02.2018",
            email: "Mariana.Guset.CJ@anaf.ro"
        },
        {
             
            firstName: "Hadarean Andreea Ramona",
            CNP: "2840528124937",
            address: "Cluj-Napoca, str. Carmen Silva, nr. 12A, ap. 4A",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "21.11.2018"
        },
        {
             
            firstName: "Han Elvira",
            CNP: "2631024120658",
            address: "Cluj-Napoca, str. Aurel Vlaicu nr. 3, ap. 127",
            FunctieCasaGradatia: "consilier superior I/5",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "10.05.2017",
            email: "Elvira.han.CJ@anaf.ro"
        },
        {
             
            firstName: "Hanc Alina Mirela",
            CNP: "2710215126214",
            address: "Gilau, nr. 1323C ap. 2, jud. Cluj",
            FunctieCasaGradatia: "consilier juridic",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "16.03.2018",
            email: "Alina.Hanc.CJ@anaf.ro"
        },
        {
             
            firstName: "Hent-Pap Lukacs",
            CNP: "1661231120700",
            address: "Cluj-Napoca, str. Gorunului, nr. 2, ap. 1",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "20.06.2018",
            email: "Lukacs.Hent.CJ@anaf.ro"
        },
        {
             
            firstName: "Hosu Mariana",
            CNP: "2670810120724",
            address: "Cluj Napoca, str. Vasile Carlova nr. 10",
            FunctieCasaGradatia: "inspector superior I/5",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "26.06.2017",
            email: "Mariana.Hosu.CJ@anaf.ro"
        },
        {
             
            firstName: "Hus Cristina Ramona",
            CNP: "2710730051103",
            address: "Beius, str. Maresal Ion Antonescu, nr. 6A, jud. Bihor",
            FunctieCasaGradatia: "consilier superior I/5",
            DGRFP: "AJFP Bihor",
            joinedId: "26.06.2017",
            email: "Cristina.Hus.BH@anaf.ro"
        },
        {
             
            firstName: "Iacob Cristina-Ioana",
            CNP: "2770415120721",
            address: "Cluj Napoca, str. Retezat nr 3, ap. 40",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "26.03.2019",
            email: "cristina.iacob.cj@anaf.ro"
        },
        {
             
            firstName: "Iancau Mircea-Dorin",
            CNP: "1700407312988",
            address: "Oradea, str. Ecaterina Teodoroiu, nr. 45, ap. 2, jud. Bihor",
            FunctieCasaGradatia: "inspector superior I/5",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "09.11.2017",
            email: "Mircea Iancau/DGRFPCJ/MFINANTE"
        },
        {
             
            firstName: "Ielciu Floriana",
            CNP: "2720527205503",
            address: "Cluj Napoca, Str.Grigore Alexandrescu nr47,ap 28",
            FunctieCasaGradatia: "consilier superior I/5",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "26.06.2017",
            email: "Floriana.Ielciu.CJ@anaf.ro"
        },
        {
             
            firstName: "Ilea Cornel",
            CNP: "1620812120663",
            address: "Cluj-Napoca, str. Scarisoara, nr. 5, ap. 35",
            FunctieCasaGradatia: "inspector superior I/5",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "20/02/2018",
            email: "Cornel.Ilea.CJ@anaf.ro"
        },
        {
             
            firstName: "Ilie Carmen Eliza",
            CNP: "2780804424549",
            address: "Bucuresti, str. Teiul Doamnei, nr. 1, bl. 8, ap. 37",
            DGRFP: "DGRFP Bucuresti",
            joinedId: "09,07,2019",
            email: "carmen-eliza.ilie.S4@anaf.ro"
        },
        {
             
            firstName: "Ioncef Cezar Sandel ",
            CNP: "1840726171719",
            address: "Cluj Napoca, Gheorghe Dima nr 12 ap 32",
            FunctieCasaGradatia: "inspector principal I/3",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "26.06.2017",
            email: "Cezar.Ioncef.CJ@anaf.ro"
        },
        {
             
            firstName: "Ioncef Ramona",
            CNP: "2810615125821",
            address: "Cluj Napoca, Gheorghe Dima nr 12 ap 32",
            FunctieCasaGradatia: "inspector principal I/3",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "32.09.2016"
        },
        {
             
            firstName: "Ionescu Mariana",
            CNP: "2630709120671",
            address: "Cluj-Napoca, str. Brigadierilor, nr. 35A",
            FunctieCasaGradatia: "consilier superior I/5",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "08.03.2018",
            email: "Mariana.Ionescu.CJ@anaf.ro"
        },
        {
             
            firstName: "Iuoras Gabriela",
            CNP: "2770702120735",
            address: "Cluj-Napoca, str. Gr. Alexandrescu, nr. 10, ap. 54",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "21.12.2018",
            email: "Gabriela.Iuoras.CJ@anaf.ro"
        },
        {
             
            firstName: "Iurcu Dana",
            CNP: "2730126126194",
            address: "Turda, str. George Bacovia nr. 29, jud. Cluj",
            FunctieCasaGradatia: "consilier superior I/5",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "30.05.2017",
            email: "Dana.Iurcu.CJ@anaf.ro"
        },
        {
             
            firstName: "Iurcu Laurentiu",
            CNP: "1750726126221",
            address: "Turda, str. George Bacovia nr. 29, jud. Cluj",
            FunctieCasaGradatia: "consilier superior I/4",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "30.05.2017",
            email: "Laurentiu.Iurcu.CJ@anaf.ro"
        },
        {
             
            firstName: "Jichisan Gianina Loredana",
            CNP: "2721008126200",
            address: "Cluj-Napoca, str. Anton Bacalbasa nr. 12D",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "17.12.2019",
            email: "Gianina.Jichisan.cj@anaf.ro"
        },
        {
             
            firstName: "Kilin Andrei Istvan Catalin",
            CNP: "1750713120700",
            address: "Cluj-Napoca, str. Partizanilor, nr. 72",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "21.06.2017",
            email: "Andrei.Kilin.CJ@anaf.ro"
        },
        {
             
            firstName: "Kovacs Anna-Maria",
            CNP: "2740922054725",
            address: "Oradea, str. Moldovei, nr. 11B, jud. Bihor",
            FunctieCasaGradatia: "inspector superior I/4",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "09.11.2017",
            email: "AnnaMaria.Kovacs.BH@anaf.ro"
        },
        {
             
            firstName: "Kurucz Petru Zoltan",
            CNP: "1711122051100",
            address: "Taricia, nr. 290, jud. Bihor",
            FunctieCasaGradatia: "consilier superior I/5",
            DGRFP: "AJFP Bihor",
            joinedId: "16.06.2017",
            email: "Petru.Kurucz.BH@anaf.ro"
        },
        {
             
            firstName: "Lajosi Zita",
            CNP: "2660923120661",
            address: "Gilau, str. Principala, nr. 1121",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "01.02.2018",
            email: "Zita.lajosi.CJ@anaf.ro"
        },
        {
             
            firstName: "Lajtrik Zita",
            CNP: "2630304301979",
            address: "Satu-Mare, str. Traian Vuia, bloc C25, ap. 14, jud. Satu-Mare",
            DGRFP: "AJFP satu Mare",
            joinedId: "10.07.2017",
            email: "Zita Lajtrik/DGFPCFSSM/SM/MFINANTE"
        },
        {
             
            firstName: "Lapusan Alexandru Ion",
            CNP: "1600207120655",
            address: "Cluj Napoca, str. Iugoslaviei nr 68, ap 19",
            FunctieCasaGradatia: "inspector superior I/5",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "26.06.2017",
            email: "Alexandru.Lapusan.CJ@anaf.ro"
        },
        {
             
            firstName: "Lapusan Teofil",
            CNP: "1610130120673",
            address: "Cluj Napoca, str. Scortarilor nr 5, ap 33",
            FunctieCasaGradatia: "consilier superior I/5",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "26.06.2017",
            email: "Teofil.Lapusan.CJ@anaf.ro"
        },
        {
             
            firstName: "Lapusanu Roxana Rodica",
            CNP: "2650514120680",
            address: "Cluj Napoca, str. Nicolae Titulescu nr 10, ap 80",
            FunctieCasaGradatia: "sef birou grad II/5",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "12.02.2018",
            email: "Roxana.Lapusanu.CJ@anaf.ro"
        },
        {
             
            firstName: "Lehoczki Edith Lenke",
            CNP: "2580614057051",
            address: "Salonta, str. Petofi Sandor, nr. 11, jud. Bihor",
            FunctieCasaGradatia: "consilier superior I/5",
            DGRFP: "AJFP Bihor",
            joinedId: "26.06.2017",
            email: "Edith.Lehoczki.BH@anaf.ro"
        },
        {
             
            firstName: "Leucian Cristina-Ileana",
            CNP: "2641110323930",
            address: "Cluj-Napoca, str. Bartok Bela, nr. 5, ap. 23",
            FunctieCasaGradatia: "consilier superior I/5",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "11.07.2017",
            email: "Cristina.Leucian.CJ@anaf.ro"
        },
        {
             
            firstName: "Lucaci Mariana",
            CNP: "2731128120704",
            address: "Cluj Napoca, 21 Decembrie 1989 nr 104, ap 21",
            FunctieCasaGradatia: "inspector principal I/5",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "15.05.2017",
            email: "Mariana.Lucaci.CJ@anaf.ro"
        },
        {
             
            firstName: "Luparu Gabriela Natalia",
            CNP: "2630618126196",
            address: "Turda, str. Lazar Gheorghe, nr. 29, jud. Cluj",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "15.03.2018",
            email: "Gabriela.Luparu.CJ@anaf.ro"
        },
        {
             
            firstName: "Magdau Daniela Carmen",
            CNP: "2710220054666",
            address: "Oradea, Bd. Dacia, nr. 114, ap. 78, jud. Bihor",
            FunctieCasaGradatia: "consilier superior I/5",
            DGRFP: "AJFP Bihor",
            joinedId: "26.06.2017",
            email: "Daniela.Magdau.BH@anaf.ro"
        },
        {
             
            firstName: "Maier Elena",
            CNP: "2690518120756",
            address: "Gilau, str. Morii nr. 1037, jud. Cluj",
            FunctieCasaGradatia: "consilier superior I/5",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "20.09.2017",
            email: "Elena.Maier.CJ@anaf.ro"
        },
        {
             
            firstName: "Maier Liviu Cristian",
            CNP: "1731202120653",
            address: "Cluj Napoca, str. Padin nr. 14, ap 2",
            FunctieCasaGradatia: "consilier superior I/5",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "13.06.2017",
            email: "Cristian.Maier.CJ@anaf.ro"
        },
        {
             
            firstName: "Mandric Adriana",
            CNP: "2760104244227",
            address: "Viseu de Sus, str. Zorilor, nr. 14, jud. Maramures",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "23.03.2018",
            email: "Adriana.Mandric.CJ@anaf.ro"
        },
        {
             
            firstName: "Maniu Adriana",
            CNP: "2630610013541",
            address: "Cugir, str. Avram Iancu, nr. 16, jud. Alba",
            DGRFP: "AJFP Alba",
            joinedId: "19.12.2019",
            email: "adriana.maniu.AB@anaf.ro"
        },
        {
             
            firstName: "Maries Mirela Lidia",
            CNP: "2590309125177",
            address: "Cluj-Napoca, str. Mircea Eliade, nr. 31, ap. 6",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "12.04.2018",
            email: "Mirela.Maries.CJ@anaf.ro"
        },
        {
             
            firstName: "Marina Mihaela",
            CNP: "2820123054753",
            address: "Paleu, str. Forvila nr 48, jud. Bihor",
            FunctieCasaGradatia: "inspector principal I/3",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "26.06.2017",
            email: "Mihaela.marina.BH@anaf.ro"
        },
        {
             
            firstName: "Marinescu Liviu",
            CNP: "1630825384198",
            address: "Ramnicu Valcea, str. Calea lui Traian, nr. 35C, jud. Valcea",
            DGRFP: "DGRFP Bucuresti",
            joinedId: "09.07.2019"
        },
        {
             
            firstName: "Matei (Vana) Simona Mariana",
            CNP: "2801002055090",
            address: "Oradea, str. Menumorut, nr. 8, ap. 10",
            DGRFP: "AJFP Bihor",
            joinedId: "24.04.2018"
        },
        {
             
            firstName: "Matei Maria",
            CNP: "2670715120652",
            address: "Cluj-Napoca, str. Caransebes nr. 18",
            FunctieCasaGradatia: "consilier superior I/5",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "29.06.2017",
            email: "Maria.Matei.CJ@anaf.ro"
        },
        {
             
            firstName: "Mehelean Elvira",
            CNP: "2671216120641",
            address: "Cluj-Napoca, str. Observatorului, nr. 19, ap. 36",
            FunctieCasaGradatia: "consilier superior I/5",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "12.02.2018",
            email: "Elvira.Mehelean.CJ@anaf.ro"
        },
        {
             
            firstName: "Mesaros Nicolae",
            CNP: "1581203301984",
            address: "Satu Mare, str. Bucegi nr. 2, jud. Satu Mare",
            FunctieCasaGradatia: "inspector superior I/5",
            DGRFP: "AJFP Satu Mare",
            joinedId: "10.07.2017",
            email: "Nicolae.Mesaros.SM@anaf.ro"
        },
        {
             
            firstName: "Mezei Huber Ecaterina",
            CNP: "2791125241634",
            address: "Cluj-Napoca, Str. Iuliu Maniu, nr. 13, ap. 7",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "19.03.2018",
            email: "Ecaterina.Huber.CJ@anaf.ro"
        },
        {
             
            firstName: "Mihoc Claudia Veturia",
            CNP: "2690829057077",
            address: "Oradea, str. Lisabonei, nr. 3, ap. 4, jud. Bihor",
            FunctieCasaGradatia: "consilier superior I/5",
            DGRFP: "AJFP Bihor",
            joinedId: "16.06.2017",
            email: "Claudia.Mihoc.BH@anaf.ro"
        },
        {
             
            firstName: "Mihu Angela Mirela",
            CNP: "2730729126194",
            address: "Turda, Calea Victoriei Nr 108, ap 12, jud. Cluj",
            FunctieCasaGradatia: "inspector superior I/5",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "30.05.2017",
            email: "Angela.Mihu.CJ@anaf.ro"
        },
        {
             
            firstName: "Mircea Anunziata Doina",
            CNP: "2620504120701",
            address: "Cluj-Napoca, str. Gheorghe Dima, nr. 43, ap. 4",
            FunctieCasaGradatia: "consilier superior I/5",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "29.05.2017",
            email: "Doina.Mircea.CJ@anaf.ro"
        },
        {
             
            firstName: "Mironescu Ileana Lucica",
            CNP: "2650720301005",
            address: "Cluj Napoca, str. Ciocarliei nr 1, ap 55",
            FunctieCasaGradatia: "inspector superior I/5",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "26.06.2017",
            email: "Lucia.Mironescu.CJ@anaf.ro"
        },
        {
             
            firstName: "Mirzan Lucia",
            CNP: "2721102126208",
            address: "Cluj-Napoca, str. Fantanele, nr. 16A, ap. 10",
            FunctieCasaGradatia: "consilier superior I/5",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "26.06.2017",
            email: "Lucia.Mirzan.CJ@anaf.ro"
        },
        {
             
            firstName: "Modure Adina Ioana",
            CNP: "2740803312978",
            address: "Cluj Napoca, Colonia Faget nr 10",
            FunctieCasaGradatia: "consilier superior I/4",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "26.06.2017",
            email: "Adina.Modure.CJ@anaf.ro"
        },
        {
             
            firstName: "Modure Dorin",
            CNP: "1740607260054",
            address: "Cluj Napoca, Colonia Faget nr 10",
            FunctieCasaGradatia: "consilier superior I/4",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "26.06.2017",
            email: "Dorin.Modure.CJ@anaf.ro"
        },
        {
             
            firstName: "Moldovan Zamfira",
            CNP: "2610621126217",
            address: "Turda, str. Ecaterina Teodoroiu, nr. 2, jud. Cluj",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "17.12.2018",
            email: "Zamfira.Moldovan.CJ@anaf.ro"
        },
        {
             
            firstName: "Morea Adriana",
            CNP: "2600829312951",
            address: "Zalau, str. Mihai Viteazul, nr. 17, ap. 147, jud. Salaj",
            DGRFP: "AJFP Salaj",
            joinedId: "21.01.2020",
            email: "adriana.morea.sj@anaf.ro"
        },
        {
             
            firstName: "Muntean Mihaela Adina",
            CNP: "2760404310012",
            address: "Oradea, str. Onestilor, nr. 90, ap. 14, jud. Bihor",
            FunctieCasaGradatia: "consilier superior I/4",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "26.06.2017",
            email: "Mihaela.Muntean.BH@anaf.ro"
        },
        {
             
            firstName: "Munteanu Florina Traiana",
            CNP: "2781007120708",
            address: "Bucuresti, Alea Valea Prahovei nr. 1A BL 825,ap 34",
            FunctieCasaGradatia: "inspector principal I/3",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "26.06.2017",
            email: "Florina.Munteanu.CJ@anaf.ro"
        },
        {
             
            firstName: "Muresan Margareta",
            CNP: "2670313123156",
            address: "Cluj Napoca, str. Retezat nr 7, ap 22",
            FunctieCasaGradatia: "sef serviciu grad I/5",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "26.06.2017",
            email: "Margareta.Muresan.CJ@anaf.ro"
        },
        {
             
            firstName: "Muresan Simona-Maria",
            CNP: "2720607123131",
            address: "Dej, str. Tomis, nr. 17, ap. 5, jud. Cluj",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "04.09.2018",
            email: "Simona.Muresan.CJ@anaf.ro"
        },
        {
             
            firstName: "Muresan Vasile ",
            CNP: "1580606124055",
            address: "Iclod nr. 215 B, jud. Cluj",
            FunctieCasaGradatia: "consilier superior I/5",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "26.06.2017",
            email: "Vasile.Muresan.CJ@anaf.ro,"
        },
        {
             
            firstName: "Nemes Mihaela",
            CNP: "2671201126254",
            address: "Turda, str. Alexandru Ioan Cuza nr 117A, jud. Cluj",
            FunctieCasaGradatia: "consilier superior I/5",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "30.05.2017",
            email: "Mihaela.Nemes.CJ@anaf.ro"
        },
        {
             
            firstName: "Nicola Ioana Gabriela",
            CNP: "2670918120017",
            address: "Campia Turzii, str. Aviatorilor nr. 1, ap. 46, jud. Cluj",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "16/03/2018",
            email: "Ioana.Nicola.CJ@anaf.ro"
        },
        {
             
            firstName: "Noja Adriana",
            CNP: "2670411120669",
            address: "Cluj-Napoca, str. Gr. Alexandrescu, nr. 55, ap. 43",
            FunctieCasaGradatia: "consilier superior I/5",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "12.05.2017",
            email: "Adriana.Noja.CJ@anaf.ro"
        },
        {
             
            firstName: "Olaru Ana",
            CNP: "1701011120015",
            address: "Cluj Napoca, Donat fn bl XI sc D et 2 ap 71",
            FunctieCasaGradatia: "inspector asistent I/5",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "30.05.2017",
            email: "Ana.Olaru.CJ@anaf.ro"
        },
        {
             
            firstName: "Onaca Gabriela Ofelia",
            CNP: "2671105126198",
            address: "Turda, str. Tineretului nr 12, jud. Cluj",
            FunctieCasaGradatia: "consilier superior I/5",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "30.05.2017",
            email: "Gabriela.Onaca.CJ@anaf.ro"
        },
        {
             
            firstName: "Onisor Alexandrina",
            CNP: "2740809120047",
            address: "Campia Turzii, str. Andrei Muresanu nr 44, jud. Cluj",
            FunctieCasaGradatia: "inspector superior I/4",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "06.02.2018",
            email: "Alexandrina.Onisor.CJ@anaf.ro"
        },
        {
             
            firstName: "Oroian Pandea Gianina Ancuta",
            CNP: "2761122260036",
            address: "Ludus, str. Zorilor, nr. 3B, jud. Mures",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "13.11.2018",
            email: "Gianina.Oroian.CJ@anaf.ro"
        },
        {
             
            firstName: "Oras Vasile-Liviu",
            CNP: "1690404051091",
            address: "Oradea, str. Prof. Dr. Gh. Marinescu, nr. 16, jud. Bihor",
            FunctieCasaGradatia: "consilier superior I/5",
            DGRFP: "AJFP Bihor",
            joinedId: "24.04.2018",
            email: "Vasile.Oras.BH@anaf.ro"
        },
        {
             
            firstName: "Ordeanu Natalia Elena",
            CNP: "2750528012538",
            address: "Cluj Napoca, str. Muresului nr 35, ap 9",
            FunctieCasaGradatia: "consilier superior I/4",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "26.06.2017",
            email: "Natalia.ordeanu.CJ@anaf.ro"
        },
        {
             
            firstName: "Pacurar Mihaela Daciana",
            CNP: "2710806313009",
            address: "Cluj Napoca, str. Sesului nr 2 ap 35",
            FunctieCasaGradatia: "consilier superior I/5",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "26.06.2017",
            email: "Daciana.Pacurar.CJ@anaf.ro"
        },
        {
             
            firstName: "Panta Stanca",
            CNP: "2740812126191",
            address: "Cluj-Napoca, str. Mehedinti nr. 9, ap. 36",
            FunctieCasaGradatia: "consilier superior I/5",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "03.07.2017",
            email: "Stanca.Panta.CJ@anaf.ro"
        },
        {
             
            firstName: "Pantea Maria Cristina",
            CNP: "2710211110653",
            address: "Oradea, Str. Onestilor, nr. 6, ap. 2",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "20.09.2017",
            email: "Cristina.pantea.BH@anaf.ro"
        },
        {
             
            firstName: "Pantea Mihaela",
            CNP: "2710817126211",
            address: "Cluj-Napoca, str. Fantanele, nr. 5, ap.125",
            FunctieCasaGradatia: "consilier superior I/5",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "19.05.2017",
            email: "Mihaela.Pantea.CJ@anaf.ro"
        },
        {
             
            firstName: "Pantis Ionel Avram",
            CNP: "1721231051105",
            address: "Oradea, str. Stefan Cel Mare, nr. 69, ap. 37, jud. Bihor",
            FunctieCasaGradatia: "consilier superior I/4",
            DGRFP: "AJFP Bihor",
            joinedId: "26.06.2017",
            email: "Ionel.Pantis.BH@anaf.ro"
        },
        {
             
            firstName: "Pantis Victoria",
            CNP: "2670305054665",
            address: "Oradea, str. Cornului, nr. 5, jud. Bihor",
            FunctieCasaGradatia: "consilier superior I/5",
            DGRFP: "AJFP Bihor",
            joinedId: "26.06.2017",
            email: "Victoria.Pantis.BH@anaf.ro"
        },
        {
             
            firstName: "Pasc Ana",
            CNP: "2600513120695",
            address: "Cluj-Napoca, str. Eugen Ionescu, nr. 17",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "02.02.2018",
            email: "Ana.Pasc.CJ@anaf.ro"
        },
        {
             
            firstName: "Patac  Sergiu Ioan",
            CNP: "1740411124041",
            address: "Gherla, str. Parcului nr. 19/B, ap 15, jud. Cluj",
            FunctieCasaGradatia: "consilier superior I/4",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "15.05.2017",
            email: "Sergiu.Patac.CJ@anaf.ro"
        },
        {
             
            firstName: "Paul Claudiu",
            CNP: "1730101120664",
            address: "Cluj-Napoca, str. Arinilor, nr. 17, ap. 11",
            FunctieCasaGradatia: "inspector superior I/4",
            DGRFP: "DGRFP cluj-Napoca",
            joinedId: "03.07.2017",
            email: "Claudiu.Paul.CJ@anaf.ro"
        },
        {
             
            firstName: "Pavel Roxana Luminita",
            CNP: "2720226010314",
            address: "Cluj Napoca, str. Pasteur nr 52 et 2 ap 39",
            FunctieCasaGradatia: "consilier superior I/4",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "26.05.2017",
            email: "Roxana.Pavel.CJ@anaf.ro"
        },
        {
             
            firstName: "Paven Rodica-Mihaela",
            CNP: "2671110125181",
            address: "Cluj-Napoca, str. Liviu Rebreanu, nr. 58, ap. 5",
            FunctieCasaGradatia: "consilier superior",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "26.01.2018",
            email: "Rodica.Paven.CJ@anaf.ro"
        },
        {
             
            firstName: "Persa Iuliu Dan",
            CNP: "1751005124033",
            address: "Gherla, str. Tudor Vladimirescu nr. 7, jud. Cluj",
            FunctieCasaGradatia: "consilier superior I/4",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "15.05.2017",
            email: "Dan.Persa.CJ@anaf.ro"
        },
        {
             
            firstName: "Persa Violeta",
            CNP: "2680123124041",
            address: "Cluj-Napoca, str. Jean Jaures, nr. 6A, ap. 9",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "24.12.2018",
            email: "Violeta.Persa.CJ@anaf.ro"
        },
        {
             
            firstName: "Pintea Aurora Claudia",
            CNP: "2671224120746",
            address: "Cluj-Napoca, str. Nasaud, nr.8, ap. 50",
            FunctieCasaGradatia: "inspector superior I/5",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "19.05.2017",
            email: "Aurora.Pintea.CJ@anaf.ro"
        },
        {
             
            firstName: "Pintilie Anca-valeria",
            CNP: "2740105120702",
            address: "Cluj-Napoca, str. Alverna, nr. 67, ap. 6",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "01.04.2019",
            email: "anca.pintilie.cj@anaf.ro"
        },
        {
             
            firstName: "Pirv Maria Floarea",
            CNP: "2620306126209",
            address: "Turda, str. Macilor nr 20, ap 25, jud. Cluj",
            FunctieCasaGradatia: "consilier superior I/5",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "30.05.2017",
            email: "Maria-Floarea.Pirv.CJ@anaf.ro"
        },
        {
             
            firstName: "Pirvu Adriana Maria",
            CNP: "2710709312951",
            address: "Cluj Napoca, str. Rapsodiei nr 6, ap 5",
            FunctieCasaGradatia: "consilier superior I/5",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "26.06.2017",
            email: "Adriana.Pirvu.CJ@anaf.ro"
        },
        {
             
            firstName: "Pollak Oskar Robert",
            CNP: "1810104125911",
            address: "Cluj-Napoca, str. Bradutului, nr. 16",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "12.04.2018",
            email: "Robert.Pollak.CJ@anaf.ro"
        },
        {
             
            firstName: "Pop Angela",
            CNP: "2711006120652",
            address: "Cluj-Napoca, str. Oituz, nr. 3",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "16.03.2018",
            email: "Angela.Pop.CJ@anaf.ro"
        },
        {
             
            firstName: "Pop Augustin",
            CNP: "1571229125185",
            address: "Aghiresu, str. Primariei, nr. 367A, jud. Cluj",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "26.02.2018"
        },
        {
             
            firstName: "Pop Calin Dumitru",
            CNP: "1741103302026",
            address: "Satu Mare, str. N Iorga nr 8, jud. Satu Mare",
            FunctieCasaGradatia: "referent superior III/4",
            DGRFP: "AJFP Satu Mare",
            joinedId: "10.07.2017",
            email: "calin.pop.SM@anaf.ro"
        },
        {
             
            firstName: "Pop Carmen Silvana",
            CNP: "2800214125824",
            address: "Apahida str. Orizontului 13, jud. Cluj",
            FunctieCasaGradatia: "inspector principal I/3",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "26.06.2017",
            email: "Silvana.Pop.CJ@anaf.ro"
        },
        {
             
            firstName: "Pop Daniela Maria",
            CNP: "2660528312963",
            address: "Zalau, Aleea Astrei nr. 3, ap. 26, jud. Salaj",
            DGRFP: "AJFP Salaj",
            joinedId: "09.01.2020"
        },
        {
             
            firstName: "Pop Doina Mariana",
            CNP: "2580102054741",
            address: "Oradea, str. Nufarului, nr. 60, ap.10, jud. Bihor",
            FunctieCasaGradatia: "consilier superior I/5",
            DGRFP: "AJFP Bihor",
            joinedId: "26.06.2017",
            email: "Doina.Pop.BH@anaf.ro"
        },
        {
             
            firstName: "Pop Dorina Lili",
            CNP: "2631215120679",
            address: "Cluj-Napoca, str. Cocorilor, nr. 3",
            FunctieCasaGradatia: "consilier superior I/5",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "29.06.2017",
            email: "Dorina.Pop.CJ@anaf.ro"
        },
        {
             
            firstName: "Pop Emil",
            CNP: "1650908120689",
            address: "Cluj-Napoca, str. Ion Mester, nr. 1, ap. 107",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "06.12.2018",
            email: "Emil.Pop.CJ@anaf.ro"
        },
        {
             
            firstName: "Pop Emilia",
            CNP: "2661214120662",
            address: "Tauti nr. 128A, jud. Cluj",
            FunctieCasaGradatia: "consilier superior I/5",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "15.05.2017",
            email: "Emilia.Pop.CJ@anaf.ro"
        },
        {
             
            firstName: "Pop Gligore",
            CNP: "1600406312970",
            address: "Zalau, Aleea Astrei nr. 3, ap. 27, jud. Salaj",
            DGRFP: "AJFP Salaj",
            joinedId: "09.01.2020",
            email: "gligore.pop.sj@anaf.ro"
        },
        {
             
            firstName: "Pop Iuliana Calina",
            CNP: "2650114301991",
            address: "Paulesti, str. Viorele nr. 8, jud. Satu Mare",
            FunctieCasaGradatia: "sef serviciu gr.II",
            DGRFP: "AJFP Satu Mare",
            joinedId: "10.07.2017",
            email: "Iuliana.Pop.SM@anaf.ro"
        },
        {
             
            firstName: "Pop Lucretia",
            CNP: "2721205060019",
            address: "Cluj Napoca, str. Tractoristilor nr 33",
            FunctieCasaGradatia: "consilier superior I/4",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "26.06.2017",
            email: "Lucretia.Pop.CJ@anaf.ro"
        },
        {
             
            firstName: "Pop Mariana",
            CNP: "2630316120738",
            address: "Cluj Napoca, str. Morii nr. 5 A",
            FunctieCasaGradatia: "consilier superior I/5",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "22.05.2017",
            email: "Mariana.Pop.CJ@anaf.ro"
        },
        {
             
            firstName: "Pop Monika Erzsebet",
            CNP: "2750504057067",
            address: "Paleu, nr. 1160, jud. Bihor",
            FunctieCasaGradatia: "consilier superior I/4",
            DGRFP: "AJFP Bihor",
            joinedId: "26.06.2017",
            email: "Monika Pop/DGFPCFSBH/BH/MFINANTE"
        },
        {
             
            firstName: "Popa Claudia Ioana",
            CNP: "2770608054687",
            address: "Oradea, str. Aluminei, nr. 84, ap. 8, jud. Bihor",
            FunctieCasaGradatia: "inspector principal I/4",
            DGRFP: "AJFP Bihor",
            joinedId: "26.06.2017",
            email: "Claudia.Popa.BH@anaf.ro"
        },
        {
             
            firstName: "Popa Marius Vasile",
            CNP: "1711229054707",
            address: "Oradea, str. Mestesugarilor, nr. 1, jud. Bihor",
            FunctieCasaGradatia: "consilier superior I/4",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "09.11.2017",
            email: "Marius.Popa.BH@anaf.ro"
        },
        {
             
            firstName: "Popa Vasile Marius",
            CNP: "1560912312968",
            address: "Cluj Napoca, str. Oasului nr 86-90 bl H2,ET 2 ,ap 46",
            FunctieCasaGradatia: "consilier superior I/5",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "26.06.2017",
            email: "Marius.Popa.CJ@anaf.ro"
        },
        {
             
            firstName: "Popa Viorel",
            CNP: "1630716052141",
            address: "Stei, str. Petrileni, nr. 13, ap. 7, jud. Bihor",
            FunctieCasaGradatia: "consilier superior I/5",
            DGRFP: "AJFP Bihor",
            joinedId: "22.06.2017",
            email: "Viorel.Popa.BH@anaf.ro"
        },
        {
             
            firstName: "Popa-Bota Mihaela",
            CNP: "2710717120719",
            address: "Cluj Napoca, str. Campului Nr 231 ap 3",
            FunctieCasaGradatia: "consilier superior I/4",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "26.06.2017",
            email: "Mihaela.Popa-Bota.CJ@anaf.ro"
        },
        {
             
            firstName: "Popon Daniela Aurora",
            CNP: "2610307020056",
            address: "Cluj- Napoca, str. Vanatorului, nr. 20A",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "21.11.2018",
            email: "Daniela.Popon.CJ@anaf.ro"
        },
        {
             
            firstName: "Popovici Alin Dumitru",
            CNP: "1740416120662",
            address: "Cluj Napoca, Calea Floresti nr 3 bl T2 sc 2 ap 36",
            FunctieCasaGradatia: "inspector superior I/5",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "26.06.2017",
            email: "Alin.Popovici.CJ@anaf.ro"
        },
        {
             
            firstName: "Racolta Ioan Vasile",
            CNP: "1690212120028",
            address: "Calarasi, nr. 309",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "17/12/2018",
            email: "Ioan.Racolta.CJ@anaf.ro"
        },
        {
             
            firstName: "Racolta Pop Crina",
            CNP: "2830225303318",
            address: "Supuru de Jos, Noua nr. 46, Jud. Satu Mare",
            FunctieCasaGradatia: "inspector superior I/4",
            DGRFP: "AJFP Satu Mare",
            joinedId: "11.07.2017"
        },
        {
             
            firstName: "Radu Claudia Emilia",
            CNP: "2730310310289",
            address: "Cluj Napoca, str. Mogosoaia nr 1 bl G1 ap 13",
            FunctieCasaGradatia: "consilier superior I/5",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "31.05.2017",
            email: "Claudia.Radu.CJ@anaf.ro"
        },
        {
             
            firstName: "Radu Gabriela",
            CNP: "2750719123130",
            address: "Cluj-Napoca, Aleea Negoiu, nr. 10C, ap. 17",
            FunctieCasaGradatia: "inspector principal I/4",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "20.06.2017",
            email: "Gabriela.Radu.CJ@anaf.ro"
        },
        {
             
            firstName: "Ragusitu Mihaela",
            CNP: "2721017120683",
            address: "Cluj Napoca, str. Campului nr 231 ap 135",
            FunctieCasaGradatia: "consilier superior I/5",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "26.06.2017",
            email: "Mihaela.Ragusitu.CJ@anaf.ro"
        },
        {
             
            firstName: "Raiu Zita Claudia Marta",
            CNP: "2710604120682",
            address: "Cluj Napoca, str. Dorului nr 16",
            FunctieCasaGradatia: "consilier superior I/5",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "26.06.2017",
            email: "Zita.Raiu.CJ@anaf.ro"
        },
        {
             
            firstName: "Ranta Paul Mihai",
            CNP: "1750917120671",
            address: "Floresti, str. Florilor, nr. 184, ap.8, jud. Cluj",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "06/12/2018",
            email: "Paul.Ranta.CJ@anaf.ro"
        },
        {
             
            firstName: "Rednic Eleonora",
            CNP: "2720703123142",
            address: "Cluj Napoca, str. Becas nr. 11 b",
            FunctieCasaGradatia: "consilier superior I/5",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "26.06.2017",
            email: "Eleonora.Rednic.CJ@anaf.ro"
        },
        {
             
            firstName: "Riureanu Ana Rodica",
            CNP: "2600624120697",
            address: "Apahida, str. Libertatii, nr. 150, jud. Cluj",
            FunctieCasaGradatia: "consilier superior I/5",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "24.05.2017",
            email: "Rodica.Riureanu.CJ@anaf.ro"
        },
        {
             
            firstName: "Roman Ioana",
            CNP: "2670102361948",
            address: "Cluj-Napoca, str. Busteni nr. 8, ap. 1",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "01.03.2018",
            email: "Ioana.Roman.CJ@anaf.ro"
        },
        {
             
            firstName: "Roman Mariana Victoria",
            CNP: "2790213260049",
            address: "Cluj-Napoca, str. Mihai Romanul, nr. 61",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "15.03.2018",
            email: "Mariana.Roman.CJ@anaf.ro"
        },
        {
             
            firstName: "Rus Ioan Vasile ",
            CNP: "1620920120691",
            address: "Cluj Napoca, Calea Manastur nr. 103, ap 39",
            FunctieCasaGradatia: "consilier superior I/5",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "15.05.2017",
            email: "Ioan.Rus.CJ@anaf.ro"
        },
        {
             
            firstName: "Rus Mihaela Cristina",
            CNP: "2720901120683",
            address: "Cluj Napoca, Col.Sopor nr 9",
            FunctieCasaGradatia: "consilier superior I/5",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "26.06.2017",
            email: "Cristina.Rus.CJ@anaf.ro"
        },
        {
             
            firstName: "Rus Simona Liliana",
            CNP: "2691130126197",
            address: "Turda, str. Cinepisti nr 2A, jud. Cluj",
            FunctieCasaGradatia: "consilier superior I/5",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "26.06.2017",
            email: "Simona.Rus.CJ@anaf.ro"
        },
        {
             
            firstName: "Sabau-Alexandru Alina Gabriela",
            CNP: "2860414430056",
            address: "Bucuresti,Soseaua Viilor nr 92 Bl 4 A sc 2 ap 45",
            FunctieCasaGradatia: "inspector superior I/2",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "22.06.2017",
            email: "alina.alexandru.cj@anaf.ro"
        },
        {
             
            firstName: "Sabou Alin Emilian",
            CNP: "1810812125781",
            address: "Cluj Napoca, str. Campului nr. 244 A ap 7 ",
            FunctieCasaGradatia: "inspector superior I/4",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "09.06.2017",
            email: "Alin.Sabou.CJ@anaf.ro"
        },
        {
             
            firstName: "Sabou Petruta Florentina",
            CNP: "2790403120725",
            address: "Cluj-Napoca, str. Campului, nr. 244 A, ap. 7",
            FunctieCasaGradatia: "consilier superior I/3",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "09.06.2017",
            email: "Petruta.Fesnic.CJ@anaf.ro"
        },
        {
             
            firstName: "Salajean Ciprian Cosmin",
            CNP: "1761012120711",
            address: "Cluj Napoca, str. Hateg nr 26 ap 5",
            FunctieCasaGradatia: "inspector superior I/3",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "26.06.2017",
            email: "Ciprian.Salajean.CJ@anaf.ro"
        },
        {
             
            firstName: "Sarb Cristina Adela",
            CNP: "2740613120663",
            address: "Cluj Napoca, str. Marginasa nr. 41",
            FunctieCasaGradatia: "consilier superior I/4",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "30.05.2017",
            email: "Adela.Sarb.CJ@anaf.ro"
        },
        {
             
            firstName: "Scortaru Simona Cristina",
            CNP: "2740407120671",
            address: "Cluj-Napoca, str. Iezer, nr. 4, ap. 23",
            FunctieCasaGradatia: "consilier superior I/4",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "20.06.2017",
            email: "Simona.Scortaru.CJ@anaf.ro"
        },
        {
             
            firstName: "Scripcariu Elena",
            CNP: "2681204224534",
            address: "Pascani, str. Stefan cel Mare, nr. 9, ap. 27, jud. Iasi",
            DGRFP: "DGRFP Iasi",
            joinedId: "17.09.2019",
            email: "elena.scripcariu.is@anaf.ro"
        },
        {
             
            firstName: "Sebestyen Ioana Adela",
            CNP: "2751219123133",
            address: "Dej, Piata Bobalna nr 7 ap 3, jud. Cluj",
            FunctieCasaGradatia: "inspector superior I/4",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "26.06.2017",
            email: "Adela.Sebestyen.CJ@anaf.ro"
        },
        {
             
            firstName: "Seles Florina",
            CNP: "2740507100011",
            address: "Cluj Napoca, str. Silvaniei nr 37",
            FunctieCasaGradatia: "consilier superior I/4",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "26.06.2017",
            email: "Florina.Seles.CJ@anaf.ro"
        },
        {
             
            firstName: "Seres Liana Mariana",
            CNP: "2750922054678",
            address: "Livada de Bihor, nr. 323, jud. Bihor",
            FunctieCasaGradatia: "inspector superior I/5",
            DGRFP: "AJFP Bihor",
            joinedId: "26.06.2017",
            email: "Liana.Seres.BH@anaf.ro"
        },
        {
             
            firstName: "Silaghi Maria Magdalena",
            CNP: "2730131126209",
            address: "Turda, str. Liberatii nr 4, ap 42, jud. Cluj",
            FunctieCasaGradatia: "inspector superior I/4",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "30.05.2017",
            email: "Magdalena.Silaghi.CJ@anaf.ro"
        },
        {
             
            firstName: "Sima Cristina Anamaria",
            CNP: "2761217311245",
            address: "Zalau, str. Corneliu Coposu, nr. 2, ap. 2, jud. Salaj",
            DGRFP: "AJFP Salaj",
            joinedId: "10.01.2020",
            email: "Cristina.sima.sj@anaf.ro"
        },
        {
             
            firstName: "Simon Monica Sava",
            CNP: "2811008243827",
            address: "Cluj-Napoca, str. edgar Quinet, nr. 32, ap. 6",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "23.12.2019",
            email: "monica.simon.cj@anaf.ro"
        },
        {
             
            firstName: "Sintejudeanu Valeriu",
            CNP: "1590115120667",
            address: "Cluj-Napoca, str. Aurel Suciu, nr. 42, ap. 7",
            FunctieCasaGradatia: "consilier superior I/5",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "10.05.2017",
            email: "Valeriu.Sintejudeanu.CJ@anaf.ro"
        },
        {
             
            firstName: "Soim Silvia Deliuta",
            CNP: "2680930124046",
            address: "Cluj Napoca, str. M.Eliade nr 44 A et 1 ap 4",
            FunctieCasaGradatia: "consilier superior I/5",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "15.05.2017",
            email: "Silvia.Soim.CJ@anaf.ro"
        },
        {
             
            firstName: "Soporean Mirela",
            CNP: "2580512120755",
            address: "Cluj-Napoca, str. Moise Nicoara, nr. 21",
            FunctieCasaGradatia: "consilier superior I/5",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "15.03.2018",
            email: "Minela.Soporean.CJ@anaf.ro"
        },
        {
             
            firstName: "Stan Calin Darius",
            CNP: "1830829125772",
            address: "Floresti, str. Somesului nr 44, jud. Cluj",
            FunctieCasaGradatia: "inspector superior I/2",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "10.05.2017",
            email: "Calin.Stan.CJ@anaf.ro"
        },
        {
             
            firstName: "Stan Cosmin Alexandru",
            CNP: "1731212120640",
            address: "Cluj Napoca, str. Fantanele nr. 32, ap 68",
            FunctieCasaGradatia: "consilier superior I/4",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "26.06.2017",
            email: "Cosmin.Stan.CJ@anaf.ro"
        },
        {
             
            firstName: "Stan Ovidiu",
            CNP: "1750417280813",
            address: "Bucuresti, str. Liviu rebreanu, nr. 60-64, bl. 1, ap. 34, sect. 3",
            DGRFP: "DGRFP Bucuresti",
            joinedId: "09.07.2019",
            email: "stanovidiu75@yahoo.com"
        },
        {
             
            firstName: "Staniste Felicia Marinela",
            CNP: "2640907125187",
            address: "Gilau, str Principala FN, bl 14,ap 5, jud. Cluj",
            FunctieCasaGradatia: "inspector superior I/5",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "27.06.2017",
            email: "Felicia.Staniste.CJ@anaf.ro"
        },
        {
             
            firstName: "Stiube Petru",
            CNP: "1740629051101",
            address: "Dobresti, nr. 76, jud. Bihor",
            FunctieCasaGradatia: "inspector superior I/4",
            DGRFP: "AJFP Bihor",
            joinedId: "26.06.2017",
            email: "Petru.Stiube.BH@anaf.ro"
        },
        {
             
            firstName: "Suaresan Claudiu Adrian",
            CNP: "1720905120666",
            address: "Cluj-Napoca, str. Nicolae Titulescu, nr. 28, ap. 33",
            FunctieCasaGradatia: "consilier superior",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "28.06.2017",
            email: "Claudiu.Suaresan.CJ@anaf.ro"
        },
        {
             
            firstName: "Suciu Angela Maria",
            CNP: "2720727012538",
            address: "Turda, Piata Romana nr 15 ap 21, jud. Cluj",
            FunctieCasaGradatia: "inspector superior I/4",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "31.05.2017",
            email: "Angela.Suciu.CJ@anaf.ro"
        },
        {
             
            firstName: "Suciu Cristina Daniela",
            CNP: "2681025120731",
            address: "Cluj-Napoca, str. Ioan Buteanu, nr. 1, ap. 2",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "01.02.2018",
            email: "Cristina.Suciu.CJ@anaf.ro"
        },
        {
             
            firstName: "Sulyok Romulus",
            CNP: "1710128312954",
            address: "Zalau, str. Corneliu Coposu, nr. 21A, jud. Salaj",
            DGRFP: "AJFP Salaj",
            joinedId: "10.01.2020",
            email: "romulus.sulyok.sj@anaf.ro"
        },
        {
             
            firstName: "Sutea Sorina Lacramioara",
            CNP: "2710124120642",
            address: "Cluj Napoca, str. Donath nr 23 bl M3x sc III ap 21",
            FunctieCasaGradatia: "consilier superior I/5",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "26.06.2017",
            email: "Sorina.Sutea.CJ@anaf.ro"
        },
        {
             
            firstName: "Szasz Adina",
            CNP: "2700929203132",
            address: "Dej, str. Iuliu Maniu, nr. 2, ap. 26, jud. Cluj",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "01.02.2017",
            email: "Adina.Szasz.CJ@anaf.ro"
        },
        {
             
            firstName: "Szekely Balazs Attila",
            CNP: "1780701120712",
            address: "Cluj Napoca, str. Garoafelor nr. 17",
            FunctieCasaGradatia: "sef serviciu grad II/4",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "23.05.2017",
            email: "Attila.Szekely.CJ@anaf.ro"
        },
        {
             
            firstName: "Szekely Csilla Adel",
            CNP: "2730315120029",
            address: "Cluj-Napoca, str. Fagetului, nr. 48, jud Cluj",
            FunctieCasaGradatia: "consilier superior I/5",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "08.12.2017",
            email: "Csilla.Szekely.CJ@anaf.ro"
        },
        {
             
            firstName: "Tacaci Aurelia",
            CNP: "2640329120676",
            address: "Cluj-Napoca, Calea Manastur, nr. 93, ap. 64",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "02.02.2018",
            email: "Aurelia.Tacaci.CJ@anaf.ro"
        },
        {
             
            firstName: "Tanchici Constantin",
            CNP: "1620519120671",
            address: "Belis, str. Principala nr. 378, jud. Cluj",
            FunctieCasaGradatia: "consilier superior I/5",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "26.06.2017",
            email: "Constantin.Tanchici.CJ@anaf.ro"
        },
        {
             
            firstName: "Tarau Violeta",
            CNP: "2710718057051",
            address: "Oradea, str. Eftimie Murgu, nr. 62, ap. 6, jud. Bihor",
            FunctieCasaGradatia: "consilier superior I/5",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "26.06.2017",
            email: "Violeta.Tarau.BH@anaf.ro"
        },
        {
             
            firstName: "Tirnovan Mirela",
            CNP: "2690224124036",
            address: "Gherla, Aleea Zorilor, nr. 8",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "01.02.2018",
            email: "Mirela.Tirnovan.CJ@anaf.ro"
        },
        {
             
            firstName: "Tise Eugen ",
            CNP: "1630722060780",
            address: "Manastireni, str. Manasturul Romanesc nr 140, jud. Cluj",
            FunctieCasaGradatia: "consilier superior I/5",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "20.09.2017",
            email: "Eugen.Tise.CJ@anaf.ro"
        },
        {
             
            firstName: "Tocaciu Aurelia",
            CNP: "2590823126198",
            address: "Cluj Napoca, str. Azuga nr. 2 ap 26",
            FunctieCasaGradatia: "consilier superior I/5",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "26.06.2017",
            email: "Aurelia.Tocaciu.CJ@anaf.ro"
        },
        {
             
            firstName: "Tolnay Paraschiva Margareta",
            CNP: "2630109054666",
            address: "Oradea, str. Selimbarului, nr. 9, ap1, jud. Bihor",
            FunctieCasaGradatia: "consilier superior I/5",
            DGRFP: "AJFP Bihor",
            joinedId: "26.06.2017",
            email: "paraschiva.Tolnay.BH@anaf.ro"
        },
        {
             
            firstName: "Torok Eva ",
            CNP: "2650416124030",
            address: "Gherla, str. Tudor Vladimirescu nr. 75, jud. Cluj",
            FunctieCasaGradatia: "consilier superior I/5",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "15.05.2017",
            email: "Eva.Torok.CJ@anaf.ro"
        },
        {
             
            firstName: "Toth Andrea Yvette",
            CNP: "2901129303924",
            address: "Livada, str. 16 Februarie nr 26, jud. Satu Mare",
            FunctieCasaGradatia: "inspector debutant",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "26.06.2017",
            email: "Andrea.Toth.CJ@anaf.ro"
        },
        {
             
            firstName: "Toth Lidia Mariana",
            CNP: "2680309120010",
            address: "Campia Turzi, str. Teilor nr. 39B, jud. Cluj",
            FunctieCasaGradatia: "inspector superior I/5",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "08.07.2017",
            email: "Lidia.Toth.CJ@anaf.ro"
        },
        {
             
            firstName: "Toth Sorin",
            CNP: "1770419302006",
            address: "Satu Mare, str. D. Careiului nr. 34, ap 74, jud. Satu Mare",
            FunctieCasaGradatia: "sef serviciu grad II/5",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "10.07.2017",
            email: "Sorin.Toth.SM@anaf.ro"
        },
        {
             
            firstName: "Trif Dorina Marinela",
            CNP: "2680728125186",
            address: "Floresti, str. Plopilor, nr. 30, jud. Cluj",
            FunctieCasaGradatia: "inspector superior I/5",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "24.05.2017",
            email: "Dorina.Trif.CJ@anaf.ro"
        },
        {
             
            firstName: "Trif Mihaela-Rodica",
            CNP: "2770715123144",
            address: "Dej, Aleea Tomis nr. 7, ap. 26",
            FunctieCasaGradatia: "inspector superior I/3",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "10.05.2017",
            email: "Mihaela.Trif.CJ@anaf.ro"
        },
        {
             
            firstName: "Trifan Camelia Luminita",
            CNP: "2671225126221",
            address: "Turda, str. Cheii nr 11, jud. Cluj",
            FunctieCasaGradatia: "inspector superior I/5",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "30.05.2017",
            email: "Camelia.Trifan.CJ@anaf.ro"
        },
        {
             
            firstName: "Trombitas Tunde",
            CNP: "2700514123139",
            address: "Dej, str. Traian, nr. 6, jud. Cluj",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "07.02.2018",
            email: "Tunde.Trombitas.CJ@anaf.ro"
        },
        {
             
            firstName: "Truta Maria",
            CNP: "2690420125173",
            address: "Cluj-Napoca, str. Bucium, nr. 13, ap.20",
            FunctieCasaGradatia: "consilier superior I/5",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "30.05.2017",
            email: "Maria.petruta.CJ@anaf.ro"
        },
        {
             
            firstName: "Tulai Ilie Octavian",
            CNP: "1600123126193",
            address: "Cluj-Napoca, str. Octavian Fodor, nr. 4",
            FunctieCasaGradatia: "consilier superior I/5",
            DGRFP: "SESCS Cluj-Napoca",
            joinedId: "02.07.2018",
            email: "Ilie Tulai/DO_EXEC_SILITA/ANAF/MFINANTE"
        },
        {
             
            firstName: "Tulai Elena",
            CNP: "2640820120020",
            address: "Comuna Luna Nr 66, jud. Cluj",
            FunctieCasaGradatia: "inspector superior I/5",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "12.02.2018",
            email: "Elena.Tulai.CJ@anaf.ro"
        },
        {
             
            firstName: "Tulai Mihaela",
            CNP: "2670925182855",
            address: "Cluj-Napoca, str. Octavian Fodor, nr. 4",
            FunctieCasaGradatia: "consilier superior",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "01.02.2018",
            email: "Mihaela.Tulai.CJ@anaf.ro"
        },
        {
             
            firstName: "Tusa Laurentiu Paul",
            CNP: "1680225120672",
            address: "Cluj Napoca, str. Valea Fantinelor nr 30",
            FunctieCasaGradatia: "consilier superior I/5",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "17.01.2018",
            email: "Paul.Tusa.CJ@anaf.ro"
        },
        {
             
            firstName: "Tusa Simona",
            CNP: "2730814120681",
            address: "Cluj Napoca, str. Valea Fantinelor nr 30",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "01.02.2018",
            email: "Simona.Tusa.CJ@anaf.ro"
        },
        {
             
            firstName: "Udrea Simona",
            CNP: "2690709204096",
            address: "Lupeni, str. Tudor Vladimirescu, nr. 20, ap.5, jud. Hunedoara",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "01.04.2019",
            email: "simona.udrea.cj@anaf.ro"
        },
        {
             
            firstName: "Udrescu Stelian",
            CNP: "1630513120719",
            address: "Cluj-Napoca, str. Stejarului nr. 9",
            FunctieCasaGradatia: "consilier superior I/5",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "01/03/2018",
            email: "Stelian.Udrescu.CJ@anaf.ro"
        },
        {
             
            firstName: "Ulici Gabriela",
            CNP: "2710810384203",
            address: "Oradea, str. Colinelor, nr. 35",
            FunctieCasaGradatia: "consilier superior I/5",
            DGRFP: "AJFP Bihor",
            joinedId: "26.06.2017",
            email: "Gabriela.Ulici.BH@anaf.ro"
        },
        {
             
            firstName: "Ulici Raluca Mihaela",
            CNP: "2810118244499",
            address: "Sighetu M, str. Popa Lupu nr. 8, ap 23, jud. Maramures",
            FunctieCasaGradatia: "inspector superior I/3",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "23.05.2017",
            email: "Raluca.Ulici.CJ@anaf.ro"
        },
        {
             
            firstName: "Varga Annamaria",
            CNP: "2780923293137",
            address: "Cluj-Napoca, Bd. Nicolae Titulescu, nr. 17, ap. 7",
            FunctieCasaGradatia: "inspector superior I/3",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "26.05.2017",
            email: "Annamaria.varga.CJ@anaf.ro"
        },
        {
             
            firstName: "Vicasiu Mihaela",
            CNP: "2720911060771",
            address: "Cluj-Napoca, str. Observatorului, nr. 17, ap. 5",
            FunctieCasaGradatia: "consilier superior I/5",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "10.05.2017",
            email: "Mihaela.Vicasiu.CJ@anaf.ro"
        },
        {
             
            firstName: "Vlad Cristina",
            CNP: "2790107323914",
            address: "Cluj-Napoca, str. Buftea, nr. 10, ap. 20",
            FunctieCasaGradatia: "consilier superior I/4",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "16.02.2018",
            email: "Cristina.Vlad.CJ@anaf.ro"
        },
        {
             
            firstName: "Zadic Ioan",
            CNP: "1610705120023",
            address: "Campia Turzii, str. Motiilor nr 2, jud. Cluj ",
            FunctieCasaGradatia: "consilier superior I/5",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "18.05.2017",
            email: "Ioan.Zadic.CJ@anaf.ro"
        },
        {
             
            firstName: "Zancu Adriana Renate",
            CNP: "2660914120018",
            address: "Campia Turzii, str. Traian nr. 149",
            FunctieCasaGradatia: "consilier superior I/5",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "21.11.2018"
        },
        {
             
            firstName: "Zay Acatiu Gheorghe",
            CNP: "1650217312964",
            address: "Zalau, str. Avram iancu, nr. 9, ap. 8, jud. Salaj",
            DGRFP: "AJFP Salaj",
            joinedId: "10.01.2020",
            email: "acatiu.zay.sj@anaf.ro"
        },
        {
             
            firstName: "Birici Ana-Maria",
            CNP: "2670417060010",
            address: "Bistrita, str. General Grigore Balan nr. 42, ap. 63, jud. B-N",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "11.02.2020"
        },
        {
             
            firstName: "Ramba Daniela Mihaela",
            CNP: "2640301084751",
            address: "Victoria, str. Pietii nr. 5, ap. 8, jud. Brasov",
            DGRFP: "DGRFP Brasov",
            joinedId: "11.02.2020"
        },
        {
             
            firstName: "Pastina Marcela",
            CNP: "26511024084757",
            address: "Victoria, str. Negoiu, nr. 5 ap.8, jud. Brasov",
            DGRFP: "DGRFP Brasov",
            joinedId: "11.02.2020"
        },
        {
             
            firstName: "Sandor Erika",
            CNP: "2690417192463",
            address: "Odorheiul Secuiesc, str. Kuvar, nr. 6, ap. 8, jud. Harghita",
            DGRFP: "DGRFP Brasov",
            joinedId: "07.02.2020",
            email: "erika.sandor.hr@anaf.ro"
        },
        {
             
            firstName: "Baroti Attila",
            CNP: "1700428190696",
            address: "Ciunani, str. Volgy nr. 361E, jud. Harghita",
            DGRFP: "DGRFP Brasov",
            joinedId: "07.02.2020",
            email: "attila.baroti.hr@anaf.ro"
        },
        {
             
            firstName: "Kedves Ecaterina",
            CNP: "2640806190131",
            address: "Sandominic, str. Principala, nr. 521, jud. Harghita",
            DGRFP: "DGRFP Brasov",
            joinedId: "06.02.2020",
            email: "kedves.ecaterina.hr@anaf.ro"
        },
        {
             
            firstName: " ",
            CNP: "1860418190450",
            address: "Nicolesti, nr. 100, jud. Harghita",
            DGRFP: "DGRFP Brasov",
            joinedId: "06.02.2020",
            email: "szabolcs.hr@anaf.ro"
        },
        {
             
            firstName: "Andrasi Zsolt",
            CNP: "1820816190449",
            address: "Fitod, nr. 181, jud. Harghita",
            DGRFP: "DGRFP Brasov",
            joinedId: "06.02.2020",
            email: "andrasi.zsolt.hr@anaf.ro"
        },
        {
             
            firstName: "Voda Teofana",
            CNP: "2701222193797",
            address: "Toplita, str. Izvoarelor, bl. A, ap. 19, jud. Harghita",
            DGRFP: "DGRFP Brasov",
            joinedId: "07.02.2020",
            email: "voda.teofana.hr@anaf.ro"
        },
        {
             
            firstName: "Petre Valentin Ion",
            CNP: "1771204293216",
            address: "Pleasa, nr. 832, Ploiesti, Prahova",
            DGRFP: "DGCVPF/ANAF",
            joinedId: "10.02.2020",
            email: "de verificat"
        },
        {
             
            firstName: "Istratescu Monica",
            CNP: "2710703084751",
            address: "Victoria, str. Negoiu, nr. 7 ap.6, jud. Brasov",
            DGRFP: "DGRFP Brasov",
            joinedId: "07.02.2020",
            email: "monica.istratescu.bv@anaf.ro"
        },
        {
             
            firstName: "Cristian Monica Eugenia",
            CNP: "2670226084785",
            address: "Victoria, str. Oltului, nr. 25, ap. 10, jud. Brasov",
            DGRFP: "DGRFP Brasov",
            joinedId: "07.02.2020",
            email: "monica.cristian.bv@anaf.ro"
        },
        {
             
            firstName: "Costea Neonila-Viorica",
            CNP: "2680607084751",
            address: "Victoria, str. Albota, bl. 9, ap. 38, jud. Brasov",
            DGRFP: "DGRFP Brasov",
            joinedId: "07.02.2020",
            email: "viorica.costea.bv@anaf.ro"
        },
        {
             
            firstName: "Valean Dragos Sebastian",
            CNP: "1700117241638",
            address: "Sigetu Marmatiei, P-ta 1 Decembrie 1918, jud. Maramures",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "10.02.2020",
            email: "valean.sebastian.mm@anaf.ro"
        },
        {
             
            firstName: "Ghiduch Lidia",
            CNP: "2590323272652",
            address: "Roman, Mihai Eminescu, bl. 11, ap. 10, Neamt",
            DGRFP: "DGRFP Iasi",
            joinedId: "10.02.2020",
            email: "nu am gasit"
        },
        {
             
            firstName: "Turcitu Camelia",
            CNP: "2690809163281",
            address: "Craiova, str. Popa Sapca, bl. 10, ap. 6, jud. Dolj",
            DGRFP: "DGRFP Craiova",
            joinedId: "07.02.2020",
            email: "camelia.turcitu.dj@anaf.ro"
        },
        {
             
            firstName: "Constantin Maria",
            CNP: "2600908060772",
            address: "Bistrita, str. C.R. Vivu, nr 12, ap. 25, jud. Bistrita-Nasaud",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "10.02.2020",
            email: "maria.constantin.bn@anaf.ro"
        },
        {
             
            firstName: "Avram Cristina Olga",
            CNP: "2730811064343",
            address: "Sangeaoz Bai, str. Izvoarelor, bl. T1, ap. 18, B-N",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "10.02.2020",
            email: "cristina.avram.bn@anaf.ro"
        },
        {
             
            firstName: "Harapascu Ioan",
            CNP: "1821220060581",
            address: "Ilva Mica, str. Plai, nr. 457, jud. Bistrita-Nasaud",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "10.02.2020",
            email: "ioan.harapascu.bn@anaf.ro"
        },
        {
             
            firstName: "Romanessi Laura Diana",
            CNP: "2760406060774",
            address: "Bistrita, aleea Clopoteilor, nr. 1, ap. 66, jud Bistrita-Nasaud",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "10.02.2020",
            email: "diana.romanessi.bn@anaf.ro"
        },
        {
             
            firstName: "Nicolae Bogdan",
            CNP: "1851011170084",
            address: "Galati, Bd. Marea Unire, nr. 11 A, jud. Galati",
            DGRFP: "DGESCS/ANAF",
            joinedId: "10.02.2020",
            email: "bogdan.nicolae.gl@anaf.ro"
        },
        {
             
            firstName: "Marcu Diana Gabriela",
            CNP: "2720615120718",
            address: "Floresti, str. Izvorului, nr. 12, jud. Cluj",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "10.02.2020",
            email: "diana.marcu.cj@anaf.ro "
        },
        {
             
            firstName: "Tianu Mirela",
            CNP: "2641218120659",
            address: "Cluj-Napoca, str. Padin, nr. 2, ap. 19",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "10.02.2020",
            email: "mirela.tianu.cj@anaf.ro"
        },
        {
             
            firstName: "Chendrean Gabriela",
            CNP: "2650505060770",
            address: "Dej, str. G. Cosbuc, nr. 19, jud. Cluj",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "10.02.2020",
            email: "gabriela.chendrean.cj@anaf.ro"
        },
        {
             
            firstName: "Trombitas Tunde",
            CNP: "2700514123139",
            address: "Dej, str. Traian, nr. 6, jud. Cluj",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "10.02.2020",
            email: "duplicat nr 274"
        },
        {
             
            firstName: "Sofronie Ancuta Irina",
            CNP: "2761203212979",
            address: "Slobozia, str. Viilor, bl. S6, ap. 5, jud. Ialomita",
            DGRFP: "DGRFP Ploiesti",
            joinedId: "07.02.2020",
            email: "ancuta.sofronie.il@anaf.ro"
        },
        {
             
            firstName: "Serban Ioana Madalina",
            CNP: "2700422080040",
            address: "Brasov, str. carierei, nr. 3, ap. 6",
            DGRFP: "DGRFP Brasov",
            joinedId: "06.02.2020",
            email: "ioana.serban.bv@anaf,ro"
        },
        {
             
            firstName: "Neamtu Adelina-Costinela",
            CNP: "2771030284403",
            address: "Bucuresti, Calea Calarasi, nr. 323, ap. 12",
            DGRFP: "DGRFP Bucuresti",
            joinedId: "07.02.2020",
            email: "adelina.neamtu.b@anaf.ro"
        },
        {
             
            firstName: "Caloean Virginia Aurelia",
            CNP: "2761020212982",
            address: "Slobozia, str. Matei Basarab, nr. 10, ap. 6, jud. Ialomita",
            DGRFP: "DGRFP Ploiesti",
            joinedId: "07.02.2020",
            email: "nu am gasit"
        },
        {
             
            firstName: "Grigore Lenuta",
            CNP: "2671213100049",
            address: "Slobozia, str. Matei Basarab, nr. 51, ap. 8, jud. Ialomita",
            DGRFP: "DGRFP Ploiesti",
            joinedId: "07.02.2020",
            email: "nu am gasit"
        },
        {
             
            firstName: "Biega Antoneta-Corina",
            CNP: "2670503211671",
            address: "Slobozia, aleea Pietii, nr. 2, ap 26, jud. Ialomita",
            DGRFP: "DGRFP Ploiesti",
            joinedId: "07.02.2020",
            email: "nu am gasit"
        },
        {
             
            firstName: "Pahontu Valentina",
            CNP: "2730411212954",
            address: "Slobozia, str. Matei Basarab, Bl. 31, ap. 12, jud. Ialomita",
            DGRFP: "DGRFP Ploiesti",
            joinedId: "07.02.2020",
            email: "valentina.pahontu.il@anaf.ro"
        },
        {
             
            firstName: "Bazarea Sandica",
            CNP: "2780924212965",
            address: "Slobozia, str Domnita Balasa, bl. U10, ap.2, jud. Ialomita",
            DGRFP: "DGRFP Ploiesti",
            joinedId: "07.02.2020",
            email: "sandica.bazarea.il@anaf.ro"
        },
        {
             
            firstName: "Marinescu Alice-Minerva",
            CNP: "2770603212954",
            address: "Slobozia, str. Cuza Voda, bl IX, ap. 3, jud. Ialomita",
            DGRFP: "DGRFP Ploiesti",
            joinedId: "07.02.2020",
            email: "nu am gasit"
        },
        {
             
            firstName: "Joga Maria",
            CNP: "2650728212984",
            address: "Slobozia, str. Gheorghe Doja, nr. 40, jud. Ialomita",
            DGRFP: "DGRFP Ploiesti",
            joinedId: "07.02.2020",
            email: "nu am gasit"
        },
        {
             
            firstName: "Scutelnicu carmen Elena",
            CNP: "2740610080023",
            address: "Slobozia, str. Garii, nr. 7, ap. 57, jud. Ialomita",
            DGRFP: "DGRFP Ploiesti",
            joinedId: "07.02.2020",
            email: "nu am gasit"
        },
        {
             
            firstName: "Ionescu Aneta",
            CNP: "2660720212956",
            address: "Tandarei, str. Bucuresti, bl.52H , ap. 1, jud. Ialomita",
            DGRFP: "DGRFP Ploiesti",
            joinedId: "07.02.2020",
            email: "nu am gasit"
        },
        {
             
            firstName: "Grigore Elena",
            CNP: "2681221212966",
            address: "Cazanesti, str. Gavrilescu, nr. 22, jud. Ialomita",
            DGRFP: "DGRFP Ploiesti",
            joinedId: "07.02.2020",
            email: "nu am gasit"
        },
        {
             
            firstName: "Zeca Victoria",
            CNP: "2680202212967",
            address: "Slobozia, str. Panselutelor, nr. 2, ap. 12, jud. Ialomita",
            DGRFP: "DGRFP Ploiesti",
            joinedId: "07.02.2020",
            email: "nu am gasit"
        },
        {
             
            firstName: "Ciobanu Dorel Constantin",
            CNP: "1550511100050",
            address: "Bucuresti, str. Pastorului, nr. 40",
            DGRFP: "DGRFP Bucuresti",
            joinedId: "07.02.2020",
            email: "nu am gasit"
        },
        {
             
            firstName: "Anton Cornel",
            CNP: "1630615400241",
            address: "Suceava, str. prof Leca Morariu, nr. 14, ap. 19, jud. Suceava",
            DGRFP: "DGRFP Iasi",
            joinedId: "07.02.2020",
            email: "cornel.anton.sv@anaf.ro"
        },
        {
             
            firstName: "Buibas Ana Maria Corina",
            CNP: "2760915451540",
            address: "Bucuresti, bd. Basarabia, nr. 104, ap. 7",
            DGRFP: "DGRFP Bucuresti",
            joinedId: "07.02.2020",
            email: "ana.buibas.b@anaf.ro"
        },
        {
             
            firstName: "Carje Monica",
            CNP: "2671226084756",
            address: "Vistea de Jos, str. principala, nr. 196, jud. Brasov",
            DGRFP: "DGRFP Brasov",
            joinedId: "07.02.2020",
            email: "monica.carje.bv@anaf.ro"
        },
        {
             
            firstName: "Bogdan Elena",
            CNP: "2600720082414",
            address: "Fagaras, str. Campului, bl. 20, ap. 5, jud. Brasov",
            DGRFP: "DGRFP Brasov",
            joinedId: "07.02.2020",
            email: "elena.bogdan.bv@anaf.ro"
        },
        {
             
            firstName: "Gherghel Daniela Steluta",
            CNP: "2710807082410",
            address: "Brasov, str. Calea Bucuresti, nr. 76, ap. 23, jud. Brasov",
            DGRFP: "DGRFP Brasov",
            joinedId: "07.02.2020",
            email: "daniela.gherghel.bv@anaf.ro"
        },
        {
             
            firstName: "Filipoiu Sorina Cristina",
            CNP: "2691224084757",
            address: "Victoria, str. Garii, nr. 27, jud. Brasov",
            DGRFP: "DGRFP Brasov",
            joinedId: "07.02.2020",
            email: "nu am gasit"
        },
        {
             
            firstName: "Pop Cornelia",
            CNP: "2650608082439",
            address: "Voila, str. Principala, nr. 88, jud. Brasov",
            DGRFP: "DGRFP Brasov",
            joinedId: "07.02.2020",
            email: "nu am gasit"
        },
        {
             
            firstName: "Cucu Mihaela",
            CNP: "2690804126217",
            address: "Turda, str. Romana, nr. 45, jud. Cluj",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "07.02.2020",
            email: "mihaela.cucu.cj@anaf.ro"
        },
        {
             
            firstName: "Deac Maria",
            CNP: "2711022120011",
            address: "Campia Turzii, str. 1Decembrie 1918, jud. Cluj",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "07.02.2020",
            email: "maria.deac.cj@anaf.ro"
        },
        {
             
            firstName: "Iures Ciprian-Mihai",
            CNP: "1770623120696",
            address: "Cluj-Napoca, str. Mehedinti, nr. 5, ap. 38",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "07.02.2020",
            email: "ciprian.iures.cj@anaf.ro"
        },
        {
             
            firstName: "Burlacu Cosmin",
            CNP: "1821105045364",
            address: "Focsani, str. Cincinat Pavelescu, nr. 5, ap. 10, jud. Vrancea",
            DGRFP: "DGRFP Galati",
            joinedId: "07.02.2020",
            email: "cosmin.burlacu.vn@anaf.ro"
        },
        {
             
            firstName: "Radulescu Angelica",
            CNP: "2600923380014",
            address: "Craiova, str. Dezrobirii, nr. 15, ap. 5, jud. Dolj",
            DGRFP: "DGESCS/ANAF",
            joinedId: "07.02.2020",
            email: "angelica.radulescu.dj@anaf.ro"
        },
        {
             
            firstName: "Dinga Maria Cristina",
            CNP: "2711027272650",
            address: "Roman, str. Bogdan Dragos, nr. 65bis, jud. Neamt",
            DGRFP: "DGRFP Iasi",
            joinedId: "06.02.2020",
            email: "cristina.dinga.nt@anaf.ro"
        },
        {
             
            firstName: "Pangratiu Steliana",
            CNP: "2770425120696",
            address: "Cluj-Napoca, Campului, nr. 227, ap. 8",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "06.02.2020",
            email: "setliana.pangratiu.cj@anaf.ro"
        },
        {
             
            firstName: "Sucala Simona",
            CNP: "2780725126215",
            address: "Gilau, Republicii, nr. 916, jud. Cluj",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "06.02.2020",
            email: "simona.sucala.cj@anaf.ro"
        },
        {
             
            firstName: "Cotarcea Mirela Tatiana",
            CNP: "2730423250547",
            address: "Dr. Tr. Severin, str. I. C. Bratianu, nr. 12, ap. 10, jud. Mehedinti",
            DGRFP: "DGRFP Craiova",
            joinedId: "06.02.2020",
            email: "mirela.cotarcea.mh@anaf.ro"
        },
        {
             
            firstName: "Damatar Ovidiu-Florin",
            CNP: "1740403272647",
            address: "Roman, str. Walter Maracineanu, nr. 27, jud. Neamt",
            DGRFP: "DGRFP Iasi",
            joinedId: "06.02.2020",
            email: "ovidiu.damatar.nt@anaf.ro"
        },
        {
             
            firstName: "Todireanu Nelu",
            CNP: "1680403272643",
            address: "Roman, str. Pacii, bl. 1, ap. 1, jud. Neamt",
            DGRFP: "DGRFP Iasi",
            joinedId: "06.02.2020",
            email: "nelu.todireanu.nt@anaf.ro"
        },
        {
             
            firstName: "Sechelaru Constantin",
            CNP: "1711229270594",
            address: "Piatra Neamt, str. Mihai Viteazu, nr. 50, ap. 20, jud. Neamt",
            DGRFP: "DGRFP Iasi",
            joinedId: "06.02.2020",
            email: "constantin.sechelaru.nt@anaf.ro"
        },
        {
             
            firstName: "Nacu Dan",
            CNP: "1710426270613",
            address: "Piatra Neamt, str. Traian, nr. 80, bl. H3, ap. 42, Neamt",
            DGRFP: "DGRFP Iasi",
            joinedId: "06.02.2020",
            email: "dan.nacu.nt@anaf.ro"
        },
        {
             
            firstName: "Lichiuta Catalina Maria",
            CNP: "2780924170321",
            address: "Piatra Neamt, str. Dimitrie leonida, nr. 83, ap. 15, jud. Neamt",
            DGRFP: "DGRFP Iasi",
            joinedId: "06.02.2020",
            email: "catalina.lichiuta.nt@anaf.ro"
        },
        {
             
            firstName: "Versanu Viorica",
            CNP: "2600118190134",
            address: "Piatra Neamt, str. Darmanesti, nr. 48, ap. 5, jud. Neamt",
            DGRFP: "DGRFP Iasi",
            joinedId: "06.02.2020",
            email: "viorica.versanu.nt@anaf.ro"
        },
        {
             
            firstName: "Calota Nina",
            CNP: "2601227212967",
            address: "Stefanestii de Jos, str. Primaverii nr. 1, ap. 34, jud. Ilfov",
            DGRFP: "DGRFP Bucuresti",
            joinedId: "06.02.2020",
            email: "nina.calota.if@anaf.ro"
        },
        {
             
            firstName: "Paraschivescu Elena",
            CNP: "2660528270581",
            address: "Piatra Neamt, str. prof. Ion Negre, nr. 4, ap. 31, jud. Neamt",
            DGRFP: "DGRFP Iasi",
            joinedId: "06.02.2020",
            email: "elena.paraschivescu.nt@anaf.ro"
        },
        {
             
            firstName: "Dumitru Liliana",
            CNP: "2860104440014",
            address: "Bucuresti, str. Izvorul Muresului, bl. A11, ap. 23",
            DGRFP: "DGRFP Bucuresti",
            joinedId: "06.02.2020",
            email: "liliana.dumitru.s3@anaf.ro"
        },
        {
             
            firstName: "Tamas Maria",
            CNP: "2610930272660",
            address: "Roman, str. Sucedava, nr. 170, jud. Neamt",
            DGRFP: "DGRFP Iasi",
            joinedId: "06.02.2020",
            email: "maria.tamas.nt@anaf.ro"
        },
        {
             
            firstName: "Ignea Elena",
            CNP: "2630228272625",
            address: "Lutca, str. Nordului, nr 64, jud. Neamt",
            DGRFP: "DGRFP Iasi",
            joinedId: "06.02.2020",
            email: "elena.ignea.nt@anaf.ro"
        },
        {
             
            firstName: "Ghindea Florentina",
            CNP: "2750806105009",
            address: "Roman, str. maramures, nr. 57, jud. Neamt",
            DGRFP: "DGRFP Iasi",
            joinedId: "06.02.2020",
            email: "florentina.ghindea.nt@anaf.ro"
        },
        {
             
            firstName: "Petrov Vasilica",
            CNP: "2650418364245",
            address: "Tulcea, str. Vacarescu, nr. 13",
            DGRFP: "DGRFP Bucuresti",
            joinedId: "11.02.2020",
            email: "vasilica.petrov.s4@anaf.ro"
        },
        {
             
            firstName: "Cadiu Monica mariana",
            CNP: "2600325090038",
            address: "Brasov, str. alexandru Ciurcu, nr. 113A",
            DGRFP: "DGRFP Brasov",
            joinedId: "11.02.2020",
            email: "monica.cadiu.bv@anaf.ro"
        },
        {
             
            firstName: "Dinca Ana Dorina",
            CNP: "2700830181156",
            address: "Craiova, str. Gheorghe Doja, nr. 8, ap. 5, jud. Dolj",
            DGRFP: "DGRFP Craiova",
            joinedId: "11.02.2020",
            email: "dorina.dinca.dj@anaf.ro"
        },
        {
             
            firstName: "Niculae Dan Adrian",
            CNP: "1720124163231",
            address: "Craiova, str. Parului, nr. 29D, jud. Dolj",
            DGRFP: "DGRFP Craiova",
            joinedId: "11.02.2020",
            email: "dan.niculae.dj@anaf.ro"
        },
        {
             
            firstName: "Amzoi Dumitru",
            CNP: "1550410250529",
            address: "Dr. Tr. Severin, str. Tudor Vladimirescu, nr. 134, ap. 2, jud. Mehedinti",
            DGRFP: "DGRFP Craiova",
            joinedId: "11.02.2020",
            email: "nu am gasit"
        },
        {
             
            firstName: "Kislingher Constantin",
            CNP: "1570809250019",
            address: "Dr. Tr. Severin, str. Gheorghe Anghel, nr. 72, ap. 6, jud. Mehedinti",
            DGRFP: "DGRFP Craiova",
            joinedId: "11.02.2020",
            email: "constantin.kislingher.mh@anaf.ro"
        },
        {
             
            firstName: "Calugar Florentina-Alina",
            CNP: "2761010160029",
            address: "Bucuresti, str. Mohorului, nr. 7, ap. 10",
            DGRFP: "DGRFP Bucuresti",
            joinedId: "07.02.2020",
            email: "nu am gasit "
        },
        {
             
            firstName: "Rad Elena Violeta",
            CNP: "2761116472015",
            address: "Cluj-Napoca, str. Fabricii, nr. 3, ap. 71",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "11.02.2020",
            email: "elena.rad.cj@anaf.ro"
        },
        {
             
            firstName: "Muntean Ioan Florin",
            CNP: "1750906082439",
            address: "Bucuresti, str. Tarnava Mica, nr. 2, ap. 17",
            DGRFP: "DGRFP Bucuresti",
            joinedId: "12.02.2020",
            email: "de verificat"
        },
        {
             
            firstName: "Petrehele Florin",
            CNP: "1670614022813",
            address: "Ineu, str. Dunarii, nr. 3A, ap. 14, jud. Arad",
            DGRFP: "DGRFP Timisoara",
            joinedId: "12.02.2020",
            email: "florin.petrehele.ar@anaf.ro"
        },
        {
             
            firstName: "Crisan Marcela Felicia",
            CNP: "2590804050014",
            address: "Alesd, str. Mioritei, nr. 6, jud. Bihor",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "12.02.2020",
            email: "marcela.crisan.bh@anaf.ro"
        },
        {
             
            firstName: "Danila Daniela",
            CNP: "2650322080025",
            address: "Brasov, str.  Tebea, nr. 19, ap. 9",
            DGRFP: "DGRFP Brasov",
            joinedId: "11.02.2020",
            email: "daniela.danila.bv@anaf.ro"
        },
        {
             
            firstName: "Forsea Carmen",
            CNP: "2840222430060",
            address: "Brasov, str. Tampei, nr. 8, ap. 4",
            DGRFP: "DGRFP Brasov",
            joinedId: "12.02.2020",
            email: "carmen.forsea.bv@anaf.ro"
        },
        {
             
            firstName: "Leah Georgeta-Eugenia",
            CNP: "2630327081964",
            address: "Codlea, str. Constitutiei, nr. 67, jud. Brasov",
            DGRFP: "DGRFP Brasov",
            joinedId: "12.02.2020",
            email: "georgeta.leah.bv@anaf.ro"
        },
        {
             
            firstName: "Lucaci Teodora",
            CNP: "2711001085024",
            address: "Vulcan, nr. 326, jud. Brasov",
            DGRFP: "DGRFP Brasov",
            joinedId: "12.02.2020",
            email: "teodora.lucaci.bv@anaf.ro"
        },
        {
             
            firstName: "Muncelean Lavinia",
            CNP: "2841120190433",
            address: "Miercurea Ciuc, str. Avantului, nr. 4, ap. 19, jud. Harghita",
            DGRFP: "DGRFP Brasov",
            joinedId: "12.02.2020",
            email: "lavinia.muncelean.hr@anaf.ro"
        },
        {
             
            firstName: "Nastasa-Baras Ligia",
            CNP: "2730705173177",
            address: "Tecuci, str. Transilvaniei, nr. 22B, jud. Galati",
            DGRFP: "DGRFP Galati",
            joinedId: "12.02.2020",
            email: "ligia.nastasa.gl@anaf.ro (de vertificat nu apare judetul in aplicaite)"
        },
        {
             
            firstName: "Bogdan Gigliola-Alina",
            CNP: "2731022214629",
            address: "Bucuresti, str. Octavian Goga, nr. 22, ap. 58",
            DGRFP: "DGRFP Bucuresti",
            joinedId: "13.02.2020",
            email: "gigliola.bogdan.b@anaf.ro (de verificat nu apare sectorul / judetul in aplicatie)"
        },
        {
             
            firstName: "Ciobanu Mirela Cecilia",
            CNP: "2810701410058",
            address: "Bucuresti, Soseaua Mihai Bravu",
            DGRFP: "DGRFP Bucuresti",
            joinedId: "12.02.2020",
            email: "mirela.ciobanu.b@anaf.ro (de verificat)"
        },
        {
             
            firstName: "Dumitrescu Elena Cristina",
            CNP: "2650619293111",
            address: "Ploiesti, str. Intrarea Grindului, nr. 2, ap. 18",
            DGRFP: "DGCVPF/ANAF",
            joinedId: "13.02.2020",
            email: "nu am gasit"
        },
        {
             
            firstName: "Buricea Aura Mihaela",
            CNP: "2741231163248",
            address: "Craiova, aleea C-tin Brancusi, nr. 11, ap. 2, jud. Dolj",
            DGRFP: "DGRFP Craiova",
            joinedId: "13.02.2020",
            email: "aura.buricea.dj@anaf.ro"
        },
        {
             
            firstName: "Sotropa Gratiela-Georgeta",
            CNP: "2730406333224",
            address: "Radauti, str. Caramidariei, nr. 13, jud. Suceava",
            DGRFP: "DGRFP Iasi",
            joinedId: "13.02.2020",
            email: "gratiela.sotrop.sv@anaf.ro"
        },
        {
             
            firstName: "Bandoiu Violeta",
            CNP: "2690813040067",
            address: "Bacau, str. Bucegi, nr. 139, ap. 40, jud. Bacau",
            DGRFP: "DGRFP Iasi",
            joinedId: "13.02.2020",
            email: "violeta.bandoiu.bc@anaf.ro"
        },
        {
             
            firstName: "Ilie Catalin Corneliu",
            CNP: "1671028081968",
            address: "Brasov, str. Poienelor, nr. 8, ap. 30",
            DGRFP: "DGRFP Brasov",
            joinedId: "14.02.2020",
            email: "catalin.ilie.bv@anaf.ro"
        },
        {
             
            firstName: "Serban Simona-Victoria",
            CNP: "2700306083472",
            address: "Brasov, str. Mircea cel Batran, nr. 41, ap. 12",
            DGRFP: "DGRFP Brasov",
            joinedId: "14.02.2020",
            email: "simona.serban.bv@anaf.ro"
        },
        {
             
            firstName: "Cojocaru Nicoleta",
            CNP: "2671219085021",
            address: "Cristian, str. Invatator Pavel Gheorghe, nr. 11, jud. Brasov",
            DGRFP: "DGRFP Brasov",
            joinedId: "14.02.2020",
            email: "nicoleta.cojocaru.bv@anaf.ro"
        },
        {
             
            firstName: "Florea Ioan Cosmin",
            CNP: "1790124082411",
            address: "Fagaras, str. Castanului, bl. 49B, ap. 12",
            DGRFP: "DGRFP Brasov",
            joinedId: "11.02.2020",
            email: "ioan.florea.bv@anaf.ro"
        },
        {
             
            firstName: "Scarlat Victoria-Iuliana",
            CNP: "2710807080070",
            address: "Brasov, str. Salviei nr. 7, ap. 4",
            DGRFP: "DGRFP Brasov",
            joinedId: "11.02.2020",
            email: "victoria.scarlat.bv@anaf.ro"
        },
        {
             
            firstName: "Parjol Alexandra Nicoleta",
            CNP: "2791205430012",
            address: "Bucuresti, str. Nicolae Filimon, nr. 28, ap. 27",
            DGRFP: "DGRFP Iasi",
            joinedId: "14.02.2020",
            email: "alexandra.parjol.is@anaf.ro"
        },
        {
             
            firstName: "Morosan Nicolai-Florin",
            CNP: "1690329333212",
            address: "Suceava, str. Narciselor, nr. 5, ap. 60",
            DGRFP: "DGRFP Iasi",
            joinedId: "14.02.2020",
            email: "florin.morosan.is@anaf.ro"
        },
        {
             
            firstName: "Rotariu Doru",
            CNP: "1780601333117",
            address: "Suceava, str. prof Leca Morariu, nr. 7, ap. 1, jud. Suceava",
            DGRFP: "DGRFP Iasi",
            joinedId: "14.02.2020",
            email: "doru.rotariu.is@anaf.ro"
        },
        {
             
            firstName: "Anchidim Petru-Dan",
            CNP: "1680514335031",
            address: "Suceava, str. Statiunii, nr. 19, ap. 10",
            DGRFP: "DGRFP Iasi",
            joinedId: "14.02.2020",
            email: "nu am gasit"
        },
        {
             
            firstName: "Bajcsi Szilard",
            CNP: "1800401142614",
            address: "Sf. Gheorghe, str. Godri Ferenc, nr. 6, ap. 9, jud. Covasna",
            DGRFP: "DGRFP Brasov",
            joinedId: "14.02.2020",
            email: "szilar.bajcsi.bv@anaf.ro"
        },
        {
             
            firstName: "Evulet Mihai Adrian",
            CNP: "1830622330538",
            address: "Suceava, str. Alexandru cel Batran, nr. 18, ap.24",
            DGRFP: "DGRFP Iasi",
            joinedId: "14.02.2020",
            email: "mihai.evulet.is@anaf.ro"
        },
        {
             
            firstName: "Lazar Mihai",
            CNP: "1590502334995",
            address: "Suceava, str. Baladei, nr. 5, ap. 11",
            DGRFP: "DGRFP Iasi",
            joinedId: "14.02.2020",
            email: " nu am gasit"
        },
        {
             
            firstName: "Andrisoaie Alexandru Stefan",
            CNP: "1811128336881",
            address: "Satu-Mare, str. Principala, nr. 37, Suceava",
            DGRFP: "DGRFP Iasi",
            joinedId: "14.02.2020",
            email: "alexandru.andrisoaie.is@anaf.ro"
        },
        {
             
            firstName: "Mitulschi Vasile",
            CNP: "1700618335035",
            address: "Suceava, str. Zamcei, nr. 1A",
            DGRFP: "DGRFP Iasi",
            joinedId: "14.02.2020",
            email: "vasile.mitulschi.is@anaf.ro"
        },
        {
             
            firstName: "Leica Ovidiu Claudiu",
            CNP: "1741208372251",
            address: "Gura Humorului, str. Boureni, nr. 10, jud. Suceava",
            DGRFP: "DGRFP Iasi",
            joinedId: "14.02.2020",
            email: "ovidiu.leica.is@anaf.ro"
        },
        {
             
            firstName: "Frangulea Viorica",
            CNP: "2751118212976",
            address: "Slobozia, str Plevnei, nr. 89, jud. Ialomita",
            DGRFP: "DGRFP Ploiesti",
            joinedId: "14.02.2020",
            email: "nu am gasit"
        },
        {
             
            firstName: "Modrea Iermina",
            CNP: "2720617213003",
            address: "Slobozia, str. Viilor, nr. 3, ap. 3, jud. Ialomita",
            DGRFP: "DGRFP Ploiesti",
            joinedId: "10.02.2020",
            email: "nu am gasit"
        },
        {
             
            firstName: "Lintis Mandita",
            CNP: "2680329216191",
            address: "Tandarei, str. Romanitei, nr. 9, jud. Ialomita",
            DGRFP: "DGRFP Ploiesti",
            joinedId: "14.02.2020",
            email: "nu am gasit"
        },
        {
             
            firstName: "Cricu Steriana",
            CNP: "2750930212991",
            address: "Slobozia, Bd. Unirii, bl. U7, ap. 7, jud. Ialomita",
            DGRFP: "DGRFP Ploiesti",
            joinedId: "14.02.2020",
            email: "steriana.cricu.il@anaf.ro (de verificat)"
        },
        {
             
            firstName: "Andrei Georgeta",
            CNP: "2670918212958",
            address: "Cazanesti, str. Bucuresti, nr. 22,jud. Ialomita",
            DGRFP: "DGRFP Ploiesti",
            joinedId: "14.02.2020",
            email: "georgeta.andrei.il@anaf.ro"
        },
        {
             
            firstName: "Vasile Maria-Nicoleta",
            CNP: "2650401212983",
            address: "Ciochina, str. Scurta, nr. 3, jud. Ialomita",
            DGRFP: "DGRFP Ploiesti",
            joinedId: "14.02.2020",
            email: "nu am gasit numa DJ DB si S2"
        },
        {
             
            firstName: "Vintila Mariana",
            CNP: "2631103216201",
            address: "Tandarei, str. Digului, nr. 182 bl. 1C, ap. 11, jud. Ialomita",
            DGRFP: "DGRFP Ploiesti",
            joinedId: "14.02.2020",
            email: "mariana.vintila.ct@anaf.ro (de verificat)"
        },
        {
             
            firstName: "Bocan Elena",
            CNP: "2700116212952",
            address: "Bucuresti, str. Turda, nr. 114, ap. 21",
            DGRFP: "ATCPMB",
            joinedId: "14.02.2020",
            email: "nu am gasit"
        },
        {
             
            firstName: "Constantin Iuliana Mihaela",
            CNP: "2680115364216",
            address: "Tulcea, str. Isaccei, nr. 41, ap. 6, jud. Tulcea",
            DGRFP: "DGRFP Galati",
            joinedId: "14.02.2020",
            email: "iuliana.constantin.tl@anaf.ro"
        },
        {
             
            firstName: "Pelivan Georgiana",
            CNP: "2720922364211",
            address: "Tulcea, str. Razboieni, nr. 5, ap. 19",
            DGRFP: "DGRFP Galati",
            email: "georgiana.pelivan.tl@anaf.ro"
        },
        {
             
            firstName: "Stefanescu Laura Antonina",
            CNP: "2821103360917",
            address: "Sulina, str. I, nr. 119, ap. 20, jud. Tulcea",
            DGRFP: "DGRFP Galati",
            joinedId: "17.02.2020",
            email: "nu am gasit"
        },
        {
             
            firstName: "Damian Lenuta",
            CNP: "2610708363860",
            address: "Sulina, str. a III-a , nr. 150, ap. 15, jud. Tulcea",
            DGRFP: "DGRFP Galati",
            joinedId: "17.02.2020",
            email: "lenuta.damian.tl@anaf.ro"
        },
        {
             
            firstName: "Covaliov Mocenco Angela",
            CNP: "2741220363855",
            address: "Sulina, str. I, nr. 119, ap. 27, jud. Tulcea",
            DGRFP: "DGRFP Galati",
            joinedId: "17.02.2020",
            email: "angela.covaliov.tl@anaf.ro"
        },
        {
             
            firstName: "Calciu Ionela",
            CNP: "2690107361931",
            address: "Tulcea, str. Plevnei, nr. 47, ap. 8, jud. Tulcea",
            DGRFP: "DGRFP Galati",
            joinedId: "17.02.2020",
            email: "ionela.calciu.tl@anaf.ro"
        },
        {
             
            firstName: "Vasile Calusa",
            CNP: "2710104364225",
            address: "Tulcea, str. Rasaritului, nr. 14, jud. Tulcea",
            DGRFP: "DGRFP Galati",
            joinedId: "17.02.2020",
            email: "calusa.vasile.tl@anaf.ro"
        },
        {
             
            firstName: "Udrea Anamaria",
            CNP: "2741101364214",
            address: "Tulcea, str. Isaccei, nr. 57, ap. 9, jud. Tulcea",
            DGRFP: "DGRFP Galati",
            joinedId: "17.02.2020",
            email: "am gasit Ana-Maria Udrea in aplicatie, nu stiu cum sa ii scriu email-ul"
        },
        {
             
            firstName: "Stanciu Lenuta",
            CNP: "2670617040099",
            address: "Tulcea, str. Metalurgilor, nr. 2, ap. 18",
            DGRFP: "DGRFP Galati",
            joinedId: "17.02.2020",
            email: "lenuta.stanciu.tl@anaf.ro"
        },
        {
             
            firstName: "Stanciu Corina",
            CNP: "2730430364236",
            address: "Tulcea, Aleea Orhideelor, nr. 22, jud Tulcea",
            DGRFP: "DGRFP Galati",
            joinedId: "17.02.2020",
            email: "corina.stanciu.tl@anaf.ro"
        },
        {
             
            firstName: "Pufleni Catalina",
            CNP: "2811119360320",
            address: "Tulcea, str. Marasesti, nr. 9, ap. 10, jud.Tulcea",
            DGRFP: "DGRFP Galati",
            joinedId: "17.02.2020",
            email: "catalina.pufleni.tl@anaf.ro"
        },
        {
             
            firstName: "Casian Adina Daniela",
            CNP: "2650915364237",
            address: "Tulcea, str. Unirii, nr. 1, ap. 38",
            DGRFP: "DGRFP Galati",
            joinedId: "17.02.2020",
            email: "adina.casian.tl@anaf.ro"
        },
        {
             
            firstName: "Turnea Mariana",
            CNP: "2670409163213",
            address: "Piatra-Neamt, str. Progresului, nr. 4, ap. 50",
            DGRFP: "DGRFP Iasi",
            joinedId: "17.02.2020",
            email: "mariana.turnea.nt@anaf.ro"
        },
        {
             
            firstName: "Zibileanu Ecaterina",
            CNP: "2610907364234",
            address: "Tulcea, str. 1848, nr. 5, ap.17",
            DGRFP: "DGRFP Galati",
            joinedId: "17.02.2020",
            email: "ecaterina.zibileanu.tl@anaf.ro"
        },
        {
             
            firstName: "Popa Laura Marilena",
            CNP: "2720815364251",
            address: "Tulcea, str. Isaccei, nr. 45, ap. 8, jud. Tulcea",
            DGRFP: "DGRFP Galati",
            joinedId: "17.02.2020",
            email: "laura.popa.tl@anaf.ro"
        },
        {
             
            firstName: "Iordan Valentina Liliana",
            CNP: "2800605363433",
            address: "Tulcea, str. Babadag, nr. 163bis, ap. 2, jud. Tulcea",
            DGRFP: "DGRFP Galati",
            joinedId: "17.02.2020",
            email: "liliana.iordan.tl@anaf.ro"
        },
        {
             
            firstName: "Furtunov Liuba",
            CNP: "2691004364231",
            address: "Tulcea, str. Gradinarilor, nr. 52, ap. 4, jud. Tulcea",
            DGRFP: "DGRFP Galati",
            joinedId: "17.02.2020",
            email: "liuba.furtunov.tl@anaf.ro"
        },
        {
             
            firstName: "Gheorghe Georgeta",
            CNP: "26710093642532",
            address: "Tulcea, str. Mihai Viteazu, nr. 41, jud. Tulcea",
            DGRFP: "DGRFP Galati",
            joinedId: "17.02.2020",
            email: "georgeta.gheorghe.tl@anaf.ro"
        },
        {
             
            firstName: "Tudorache Elena",
            CNP: "2670701364264",
            address: "Tulcea, str. Varariei, nr. 3, ap. 11, jud. Tulcea",
            DGRFP: "DGRFP Galati",
            joinedId: "17.02.2020",
            email: "elena.tudorache.tl@anaf.ro"
        },
        {
             
            firstName: "Iorgoveanu Georgiana",
            CNP: "2810410366175",
            address: "Tulcea, str. Babadag, nr. 15, ap. 3, jud. Tulcea",
            DGRFP: "DGRFP Galati",
            joinedId: "17.02.2020",
            email: "georgiana.iorgoveanu.tl@anaf.ro"
        },
        {
             
            firstName: "Dochia Iordana",
            CNP: "2690825364241",
            address: "Tulcea, Aleea Cristina, nr. 6, ap. 14, jud Tulcea",
            DGRFP: "DGRFP Galati",
            joinedId: "17.02.2020",
            email: "iordana.dochia.tl@anaf.ro"
        },
        {
             
            firstName: "Epureanu Elena",
            CNP: "2620114364214",
            address: "Tulcea, str. Pacii, nr. 103, ap. 80, jud. tulcea",
            DGRFP: "DGRFP Galati",
            joinedId: "17.02.2020",
            email: "elena.epureanu.tl@anaf.ro"
        },
        {
             
            firstName: "Furtuna Rodica",
            CNP: "2740511364221",
            address: "Tulcea, Aleea Albatros, nr. 3, ap. 12, jud Tulcea",
            DGRFP: "DGRFP Galati",
            joinedId: "17.02.2020",
            email: "rodica.furtuna.tl@anaf.ro"
        },
        {
             
            firstName: "Lazea Mariana Felicia",
            CNP: "2590119082427",
            address: "Fagaras, str. Zorelelor, nr. 6, jud. Brasov",
            DGRFP: "DGRFP Brasov",
            joinedId: "14.02.2020",
            email: "mariana.lazea.bv@anaf.ro"
        },
        {
             
            firstName: "Soare Adina-Elena",
            CNP: "2710913082427",
            address: "Fagaras, str. Teiului, bl. 29, ap. 2, jud. Brasov",
            DGRFP: "DGRFP Brasov",
            joinedId: "14.02.2020",
            email: "nu am gasit"
        },
        {
             
            firstName: "Riglea Sevim",
            CNP: "2680708364245",
            address: "Tulcea, Aleea Labirintului, nr. 1, ap. 12, jud Tulcea",
            DGRFP: "DGRFP Galati",
            joinedId: "17.02.2020",
            email: "sevim.riglea.tl@anaf.ro"
        },
        {
             
            firstName: "Paun Rodica",
            CNP: "2600214080081",
            address: "Brasov, Aleea Lacramioarelor, nr. 7, ap. 6",
            DGRFP: "DGRFP Brasov",
            joinedId: "14.02.2020",
            email: "rodica.paun.bv@anaf.ro"
        },
        {
             
            firstName: "Vasiliu Felicia",
            CNP: "2760514363857",
            address: "Sulina, str. a 6-a, nr. 78, jud. Tulcea",
            DGRFP: "DGRFP Galati",
            joinedId: "17.02.2020",
            email: "nu am gasit"
        },
        {
             
            firstName: "Dicu Ioana-Constantina",
            CNP: "2670221080025",
            address: "Brasov, str. Carpatilor, nr. 21, ap. 22",
            DGRFP: "DGRFP Brasov",
            joinedId: "14.02.2020",
            email: "ioana.dicu.bv@anaf.ro"
        },
        {
             
            firstName: "Cimpan Carmen-Georgeta",
            CNP: "2791214080056",
            address: "Brasov, str. Egalitatii, nr. 43",
            DGRFP: "DGRFP Brasov",
            joinedId: "14.02.2020",
            email: "carmen.cimpan.bv@anaf.ro"
        },
        {
             
            firstName: "Vaidos Andreea",
            CNP: "2770928080026",
            address: "Brasov, str. Alunis, nr. 1, ap. 2",
            DGRFP: "DGRFP Brasov",
            joinedId: "14.02.2020",
            email: "andreea.vaidso.bv@anaf.ro"
        },
        {
             
            firstName: "Boureanu Alin",
            CNP: "1800510080111",
            address: "Brasov, str. Romana, nr. 3",
            DGRFP: "DGRFP Brasov",
            joinedId: "14.02.2020",
            email: "alin.bourceanu.bv@anaf.ro"
        },
        {
             
            firstName: "Cristian Claudiu Virgil",
            CNP: "1680624080067",
            address: "Brasov, str. Nicopole, nr. 69",
            DGRFP: "DGRFP Brasov",
            joinedId: "14.02.2020",
            email: "claudiu.cristian.bv@anaf.ro"
        },
        {
             
            firstName: "Nyeste Magdolna",
            CNP: "2770525311810",
            address: "Crasna, nr. 1372, jud. Salaj",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "14.02.2020",
            email: "magdolna.nyeste.sj@anaf.ro"
        },
        {
             
            firstName: "Panaite Doinita",
            CNP: "2590314080101",
            address: "Brasov, Calea Bucuresti, nr. 1, ap. 15",
            DGRFP: "DGRFP Brasov",
            joinedId: "14.02.2020",
            email: "nu am gasit"
        },
        {
             
            firstName: "Chitic Luminita",
            CNP: "2780716080050",
            address: "Lunca Calnicului, str. Morii, jud. Brasov",
            DGRFP: "DGRFP Brasov",
            joinedId: "14.02.2020",
            email: "luminita.chitic.bv@anaf.ro"
        },
        {
             
            firstName: "Babanas Ramona-Maria",
            CNP: "2790711310760",
            address: "Zalau, str. Gelu Voievod, nr. 25, ap. 16, jud. Salaj",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "18.02.2020",
            email: "ramona.babanas.sj@anaf.ro"
        },
        {
             
            firstName: "Grad Adina Letitia",
            CNP: "2700307244231",
            address: "Viseu de Sus, str. Ion Luca Caragiale, nr. 1A, jud. Maramures",
            DGRFP: "DGRFP Cluj-Napoca",
            joinedId: "18.02.2020",
            email: "adina.grad.mm@anaf.ro (de verificat nu apare judet in aplicatie)"
        },
        {
             
            firstName: "Fesiuc Adina",
            CNP: "2781211433022",
            address: "Bucuresti, Aleea barajul Dunarii, nr. 9, ap.55",
            DGRFP: "DGRFP Bucuresti",
            joinedId: "04.03.2020",
            email: "fesiuc.adina.if@anaf,.ro"
        },
        {
             
            firstName: "Ion Lucica",
            CNP: "2630406212956",
            address: "Slobozia, str. Ialomitei, bl. B29, ap. 24, jud. Ialomita",
            DGRFP: "DGRFP Ploiesti",
            joinedId: "11.03.2020",
            email: "lucica.ion.il@anaf.ro"
        },
        {
             
            firstName: "Geana Rodica",
            CNP: "2671010372241",
            address: "Husi, str. Ioan Voda cel Viteaz, nr. 58, jud. Vaslui",
            DGRFP: "DGRFP Iasi",
            joinedId: "26.03.2020",
            email: "nu am gasit"
        }
    ]
    for(let i = 0; i < arr.length; i++) {
        arr[i].adminId = "5fc5427077faba09978c5d5c";
        mailgun.addMemberToMailingList("sens", arr[i]);
    }
    // const res = await Member.insertMany(arr);
    // console.log(res);
}

const getMembers = async (id) => {
    let members = await Member.find({ adminId: id });
    return members;
}

const getMemberCount = async (id) => {
    let count = await Member.countDocuments({ adminId: id });
    return count;
}

const getMemberByEmail = async (email, id) => {
    let member = await Member.findOne({ email: email, adminId: id });
    return member;
}

const getMemberById = async (id) => {
    let member = await Member.findById(id);
    return member;
}

const deleteMember = async (id) => {
    let deletedStatus = await Member.deleteOne({ _id: id });
    return deletedStatus;
}

module.exports = {
    addMember,
    deleteMember,
    getMembers,
    getMemberById,
    getMemberByEmail,
    getMemberCount,
    addMembers
}