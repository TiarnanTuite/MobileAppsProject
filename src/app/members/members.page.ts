import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-members',
  templateUrl: './members.page.html',
  styleUrls: ['./members.page.scss'],
})
export class MembersPage implements OnInit {

  //ngModel variable 
  term;
  //Mock list of member details used for the page
  list = [
    {
      "name": "Collins Erickson",
      "email": "collinserickson@obones.com"
    },
    {
      "name": "Guthrie Boyer",
      "email": "guthrieboyer@obones.com"
    },
    {
      "name": "Franks Kelly",
      "email": "frankskelly@obones.com"
    },
    {
      "name": "Antonia Rosales",
      "email": "antoniarosales@obones.com"
    },
    {
      "name": "Sherrie Duke",
      "email": "sherrieduke@obones.com"
    },
    {
      "name": "Phoebe Cain",
      "email": "phoebecain@obones.com"
    },
    {
      "name": "Irma Roach",
      "email": "irmaroach@obones.com"
    },
    {
      "name": "Potter Sanders",
      "email": "pottersanders@obones.com"
    },
    {
      "name": "Hallie Petersen",
      "email": "halliepetersen@obones.com"
    },
    {
      "name": "Lloyd Levine",
      "email": "lloydlevine@obones.com"
    },
    {
      "name": "Delia Vaughn",
      "email": "deliavaughn@obones.com"
    },
    {
      "name": "Salinas Lowe",
      "email": "salinaslowe@obones.com"
    },
    {
      "name": "Flora Wynn",
      "email": "florawynn@obones.com"
    },
    {
      "name": "Lawson Nicholson",
      "email": "lawsonnicholson@obones.com"
    },
    {
      "name": "Jordan Stafford",
      "email": "jordanstafford@obones.com"
    },
    {
      "name": "Vonda Hoffman",
      "email": "vondahoffman@obones.com"
    },
    {
      "name": "Patel Hatfield",
      "email": "patelhatfield@obones.com"
    },
    {
      "name": "Neal Rush",
      "email": "nealrush@obones.com"
    },
    {
      "name": "Greene Simmons",
      "email": "greenesimmons@obones.com"
    },
    {
      "name": "Margo Osborne",
      "email": "margoosborne@obones.com"
    },
    {
      "name": "Jean Copeland",
      "email": "jeancopeland@obones.com"
    },
    {
      "name": "Palmer Fry",
      "email": "palmerfry@obones.com"
    },
    {
      "name": "Combs Bird",
      "email": "combsbird@obones.com"
    },
    {
      "name": "Erika Sykes",
      "email": "erikasykes@obones.com"
    },
    {
      "name": "Jeannie Suarez",
      "email": "jeanniesuarez@obones.com"
    },
    {
      "name": "Bond Vang",
      "email": "bondvang@obones.com"
    },
    {
      "name": "Parks Frost",
      "email": "parksfrost@obones.com"
    },
    {
      "name": "Eliza Floyd",
      "email": "elizafloyd@obones.com"
    },
    {
      "name": "Hancock Oneill",
      "email": "hancockoneill@obones.com"
    },
    {
      "name": "Harding English",
      "email": "hardingenglish@obones.com"
    },
    {
      "name": "Edna Petty",
      "email": "ednapetty@obones.com"
    },
    {
      "name": "Farmer Gilliam",
      "email": "farmergilliam@obones.com"
    },
    {
      "name": "Helen Lawrence",
      "email": "helenlawrence@obones.com"
    },
    {
      "name": "Bolton Faulkner",
      "email": "boltonfaulkner@obones.com"
    },
    {
      "name": "Shanna Valencia",
      "email": "shannavalencia@obones.com"
    },
    {
      "name": "Newman Blackburn",
      "email": "newmanblackburn@obones.com"
    },
    {
      "name": "Sasha Spencer",
      "email": "sashaspencer@obones.com"
    },
    {
      "name": "Guerra Bowers",
      "email": "guerrabowers@obones.com"
    },
    {
      "name": "Ashley Griffith",
      "email": "ashleygriffith@obones.com"
    },
    {
      "name": "Hazel Hull",
      "email": "hazelhull@obones.com"
    },
    {
      "name": "Dolores Conrad",
      "email": "doloresconrad@obones.com"
    },
    {
      "name": "Enid Norris",
      "email": "enidnorris@obones.com"
    },
    {
      "name": "Shaw Ballard",
      "email": "shawballard@obones.com"
    },
    {
      "name": "Hood Mercer",
      "email": "hoodmercer@obones.com"
    },
    {
      "name": "Cole Cortez",
      "email": "colecortez@obones.com"
    },
    {
      "name": "Valencia Hess",
      "email": "valenciahess@obones.com"
    },
    {
      "name": "Cochran Hancock",
      "email": "cochranhancock@obones.com"
    },
    {
      "name": "Catalina Mccullough",
      "email": "catalinamccullough@obones.com"
    },
    {
      "name": "Blanchard Slater",
      "email": "blanchardslater@obones.com"
    },
    {
      "name": "Bridgette Gordon",
      "email": "bridgettegordon@obones.com"
    },
    {
      "name": "Cecilia Smith",
      "email": "ceciliasmith@obones.com"
    },
    {
      "name": "Frances Hodges",
      "email": "franceshodges@obones.com"
    },
    {
      "name": "Burton Cherry",
      "email": "burtoncherry@obones.com"
    },
    {
      "name": "Annie Bright",
      "email": "anniebright@obones.com"
    },
    {
      "name": "Donovan Pratt",
      "email": "donovanpratt@obones.com"
    },
    {
      "name": "Barron Jimenez",
      "email": "barronjimenez@obones.com"
    },
    {
      "name": "Mills Sandoval",
      "email": "millssandoval@obones.com"
    },
    {
      "name": "Cooper Maxwell",
      "email": "coopermaxwell@obones.com"
    },
    {
      "name": "May Frye",
      "email": "mayfrye@obones.com"
    },
    {
      "name": "Melba Randall",
      "email": "melbarandall@obones.com"
    },
    {
      "name": "Chapman Brooks",
      "email": "chapmanbrooks@obones.com"
    },
    {
      "name": "Candice Soto",
      "email": "candicesoto@obones.com"
    },
    {
      "name": "Peters Monroe",
      "email": "petersmonroe@obones.com"
    },
    {
      "name": "Hunt Wilkinson",
      "email": "huntwilkinson@obones.com"
    },
    {
      "name": "Alvarado Larsen",
      "email": "alvaradolarsen@obones.com"
    },
    {
      "name": "Prince Greene",
      "email": "princegreene@obones.com"
    },
    {
      "name": "Rasmussen Cummings",
      "email": "rasmussencummings@obones.com"
    },
    {
      "name": "Dyer Ferguson",
      "email": "dyerferguson@obones.com"
    },
    {
      "name": "Bell Woodward",
      "email": "bellwoodward@obones.com"
    },
    {
      "name": "Shelton Blevins",
      "email": "sheltonblevins@obones.com"
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
