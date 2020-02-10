window.onload = function(){
    $(document).ready(function(){

      $("img").attr("alt", "Picture1.jpg");
      $("img").attr("title", "Picture1");
      $('#anonLogo').attr('src','images/demo/anonhq.png');
      $("#signUp").click(function(event){event.preventDefault();});$("a[href='Home Page.html']").attr('href', 'index.html');
    function dodavanjAtributaFaviconu(){
        document.getElementById('anonLogo').setAttribute('width', '50px');
        document.getElementById('anonLogo').setAttribute('height','51px');
        console.log('favicon radi');
    };
    dodavanjAtributaFaviconu();
    var datum = new Date();
    var dan = datum.getDate();
    console.log(dan);
    var mesec = datum.getMonth();
    console.log(mesec);
    var godina = datum.getFullYear();
    console.log(godina);
    var praviMesec = mesec +1;
    console.log(praviMesec);
    var ispisDatuma = dan +"."+ praviMesec+"." +godina+".";
    //vezba
    document.querySelector(".fl_right").innerHTML = ispisDatuma;
    var privacy = ["index","privacy","whistleblowers","about", "contact"];

    var write = "<ul class='p2p'>";
    write+="<li><a href='"+privacy[0]+".html'>Home Page</a></li>";
    for(var i = 1; i < privacy.length; i++){

        write += "<li><a href='"+privacy[i]+".html'>" + privacy[i].charAt(0).toUpperCase() +privacy[i].substr(1) + "</a></li>";

    };
    document.querySelector("nav").innerHTML = write;
    write += "</ul>";



    function prelazakMisaPrekoNav(){

         var anker=document.querySelectorAll('.p2p li a');
         var lijevi=document.querySelectorAll('.p2p li a');
         anker[0].addEventListener('mouseover',function(){
             lijevi[0].style.color='#dad5ad';
             lijevi[0].style.fontSize='22px';
             lijevi[0].style.borderBottom='4px solid #663399b4';
             lijevi[0].style.padding='4px';
             lijevi[0].style.borderRadius='10px';

         });
         anker[0].addEventListener('mouseout',function(){
             lijevi[0].style.color='#dad5ad';
             lijevi[0].style.fontSize='18px';
             lijevi[0].style.borderBottom='';
             lijevi[0].style.padding='0px';
             lijevi[0].style.borderRadius='0px';

         });
         anker[1].addEventListener('mouseover',function(){
             lijevi[1].style.color='#dad5ad';
             lijevi[1].style.fontSize='22px';
             lijevi[1].style.borderBottom='4px solid #663399b4';
             lijevi[1].style.padding='4px';
             lijevi[1].style.borderRadius='10px';
         });
         anker[1].addEventListener('mouseout',function(){
             lijevi[1].style.color='#dad5ad';
             lijevi[1].style.fontSize='18px';
             lijevi[1].style.borderBottom='';
             lijevi[1].style.padding='0px';
             lijevi[1].style.borderRadius='0px';
         });
         anker[2].addEventListener('mouseover',function(){
             lijevi[2].style.color='#dad5ad';
             lijevi[2].style.fontSize='22px';
             lijevi[2].style.borderBottom='4px solid #663399b4';
             lijevi[2].style.padding='4px';
             lijevi[2].style.borderRadius='10px';
         });
         anker[2].addEventListener('mouseout',function(){
             lijevi[2].style.color='#dad5ad';
             lijevi[2].style.fontSize='18px';
             lijevi[2].style.borderBottom='';
             lijevi[2].style.padding='0px';
             lijevi[2].style.borderRadius='0px';
         });
         anker[3].addEventListener('mouseover',function(){
             lijevi[3].style.color='#dad5ad';
             lijevi[3].style.fontSize='22px';
             lijevi[3].style.borderBottom='4px solid #663399b4';
             lijevi[3].style.padding='4px';
             lijevi[3].style.borderRadius='10px';
         });
         anker[3].addEventListener('mouseout',function(){
             lijevi[3].style.color='#dad5ad';
             lijevi[3].style.fontSize='18px';
             lijevi[3].style.borderBottom='';
             lijevi[3].style.padding='0px';
             lijevi[3].style.borderRadius='0px';
         });
         anker[4].addEventListener('mouseover',function(){
             lijevi[4].style.color='#dad5ad';
             lijevi[4].style.fontSize='22px';
             lijevi[4].style.borderBottom='4px solid #663399b4';
             lijevi[4].style.padding='4px';
             lijevi[4].style.borderRadius='10px';
         });
         anker[4].addEventListener('mouseout',function(){
             lijevi[4].style.color='#dad5ad';
             lijevi[4].style.fontSize='18px';
             lijevi[4].style.borderBottom='';
             lijevi[4].style.padding='0px';
             lijevi[4].style.borderRadius='0px';
         });

         }    
    prelazakMisaPrekoNav();
     function futerLista(){
            var footerCopyright = document.querySelector('.fl_left ul');
            footerArray=
            [
                '<a href="author.html">Author</a>',
                '<a href="documentation.pdf"><p>Documentation</p></a>',
                '<a href="sitemap.xml"><span class="fa-stack"><i class="fa fa-sitemap"aria-hidden="true"></i></span></a>',
                '<a href="rss.xml"><span class="fa-stack"><i class="fa fa-rss" aria-hidden="true"></i></span></a>',
                '<a href="https://www.linkedin.com/in/marko-scekic-567761174"><span class="fa-stack"><i class="fa fa-linkedin" aria-hidden="true"></i></span></a>',
                '<a href="mailto:marko.scekic.331.17@it.edu.rs"><span class="fa-stack"><i class="fa fa-envelope" aria-hidden="true"></i></span></a>'
            ];

            for(i=0;i<footerArray.length;i++)   
            {
                footerCopyright.innerHTML +=`<li>${footerArray[i]}</li>`;
            };


        };
        futerLista();
    if (window.location.pathname == '/index.html'|| window.location.pathname == '/Index.html')
      {
        console.log("home page");
        $('.one_third figure h2').css('color','white');
        $('.one_third figure .more a').css({'color':'#663399','font-size':'18px'});
        $(".one_third figure img").attr("width","290");
        $(".one_third figure img").attr("height","450");
        $("#ikonica").css('color','#663399');
        $("#glenn56").attr({"width":"210","height":"310","alt":"Glenn.jpg","title":"Glenn"});
       $('#container #homepage #intro article figure').css({'clip-path':'polygon(19% 3%, 100% 0%, 100% 100%, 0 92%)','padding':'0px','height':'290px'});
       $('#container #homepage #intro article figure h2').css({'color':'grey','font-size':'25px','margin':'0px'});
       $('#container #homepage #intro article figure p').css({'width':'50%','float':'right','word-wrap':'break-word','text-align':'end','margin-top':'-5px','padding':'0px'});    
        var slideIndex = 0;
        function imgAdd() 
    {   let imgArray = ['11','12','13','14'];
        let writte82 =document.getElementById('slider');

        let x;
        for (x in imgArray)
        {
            writte82.innerHTML += `<img class="sliderPic" src="images/demo/${imgArray[x]}.jpg">`;

        }showSlides();
    }imgAdd();


       function showSlides() {
            var i;
            var slides = document.getElementsByClassName("sliderPic");
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            };
            slideIndex++;
            if (slideIndex > slides.length) {slideIndex = 1}
            slides[slideIndex-1].style.display = "block";
            setTimeout(showSlides, 7000); 
        };

        $('a.gore').click(function(){
            $.scrollTo(0,'slow');
            return false;
          });
          $('a.scrollLink').click(function(){ 
            $.scrollTo();
            return false;
          });
        function arrow(){
            document.getElementById('ikonica').addEventListener('mouseover',function(){
                this.style.color = "#232323" ;
            });
            document.getElementById('ikonica').addEventListener('mouseout',function(){
                this.style.color = "#663399" ;
            });
            }
            arrow();
        }//if 
        else if(window.location.pathname == '/contact.html' || window.location.pathname == '/Contact.html')
        {        
            console.log('kontakt');

           var randomNum = Math.ceil(Math.random()*1000);
            document.getElementById('myCaptcha').innerHTML=randomNum;
            console.log(randomNum);    


    document.getElementById("signUp").addEventListener("click", function(){

                    var pass = true;
                var data = [];

            var fname = document.querySelector("#firstname").value.trim();
            var lname = document.querySelector("#lastname").value.trim();
            var mail = document.querySelector("#email").value.trim();
            var password =document.querySelector("#password").value.trim();
            var confirmPassword =document.querySelector("#cpassword").value.trim();
            var captchaValue =document.getElementById('myCaptchaNumber').value.trim();

            var fnameError = document.querySelector("#fnameError");
            var lnameError = document.querySelector("#lnameError");
            var mailError = document.querySelector("#emailError");
            var passError = document.querySelector("#passError");
            var cpassError = document.querySelector("#cpassError");
            var captchaError = document.querySelector("#captchaError");

            ////fun part///
            var reExFirstName =/^[A-Z]{1}[a-z]{1,13}$/;
            var reExLastName =/^[A-Z]{1}[a-z]{1,15}$/;
            var reExEmail = /^[a-z0-9._%+]+@[a-z0-7.]+\.[a-z]{2,4}$/;
            var reExPass = /^[a-z0-9]{5,20}$/;
            if(fname == ""){
                fnameError.innerHTML="Missing First Name.";
                pass = false;
            }
            else if(!reExFirstName.test(fname))
                {fnameError.innerHTMl="First Name not typed corectly.";
                pass = false;}
            else{  data.push(fname);
                fnameError.innerHTML="";  }

            if(lname == "")
            {
                lnameError.innerHTML = "Missing Last Name.";
                pass= false;
            }
            else if(!reExLastName.test(lname))
                {
                    lnameError.innerHTML = "Last Name not typed corectly.";
                    pass= false;
                }
            else {data.push(lname);
            lnameError.innerHTML = "";
            }
            if(mail =="")
                {
                    mailError.innerHTML="Email adress is missing";
                    pass=false;
                }
            else if(!reExEmail.test(mail))
            {
                mailError.innerHTML = "Email adress not typed corectly.";
                pass = false;
            }
            else {
                data.push(mail);
                mailError.innerHTML = "";


            }
            if(password ==""){
                passError.innerHTML="Chosen password is missing.";
            pass =false;}
            else if(!reExPass.test(password))
            {
                passError.innerHTML="Chosen password is not long enough.";

                pass=false;
            }
            else {
                data.push(password);
                passError.innerHTML="";
            }

            if (reExPass.test(confirmPassword))
            {
               data.push(confirmPassword);
               pass=true;
            }
            else{ confirmPassword.innerHTML="Passwords dont match."
        pass=false;}




                console.log(captchaValue);


               if(captchaValue == ""){
                captchaError.innerHTML="Missing Captcha .";
                pass = false; 
            }
                else if(captchaValue!=randomNum)
            {
                captchaError.innerHTML = "Captcha not typed corectly.";
                pass = false;
                console.log('Captcha not typed corectly.');
            }
            else{

                captchaError.innerHTML="";
                pass=true;
            }


    document.querySelector('table').style.border ='red';
        var gender = document.getElementsByName("sex");
       var chosen = false;
        for(var i = 0; i<gender.length;i++)
        {

           if (gender[i].checked)
           {
               chosen = true;
                gender[i].style.backgroundColor = "green";
                break;
           }
       }

        if(chosen) {var sex =document.getElementsByName("sex").innerHTML = "";}
        else{ chosen = false;

         $('label').css('border','2px solid red');
         $('#genderError')
         document.getElementById("genderError").innerHTML ="Gender must be chosen";
    }
    if(chosen==true && pass==true && captchaValue==randomNum){
            alert("Successful Sign up");
        }
        else{}

    });

    particlesJS("particles-js", {
        particles: {
          number: {
            value: 150,
            density: {enable: true,value_area: 800},
          },
          color: {
            value: "#4caf50"
          },
          shape: {
            type: "circle",
            stroke: {
              width: 1,
              color: "#ccc"
            },
            image: {
              src: "http://www.iconsdb.com/icons/preview/white/contacts-xxl.png",
              width: 100,
              height: 100
            }
          },
          opacity: {
            value: 0.5,
            random: false,
            anim: {
              enable: false,
              speed: 0.5,
              opacity_min: 0.1,
              sync: false
            }
          },
          size: {
            value: 2,
            random: true,
            anim: {
              enable: false,
              speed: 40,
              size_min: 0.1,
              sync: false
            }
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: "#4caf50",
            opacity: 0.4,
            width: 1
          },
          move: {
            enable: true,
            speed: 2,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200
            }
          }
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: {
              enable: true,
              mode: "grab"
            },
            onclick: {
              enable: true,
              mode: "push"
            },
            resize: true
          },
          modes: {
            grab: {
              distance: 150,
              line_linked: {
                opacity: 1
              }
            },
            bubble: {
              distance: 400,
              size: 40,
              duration: 2,
              opacity: 8,
              speed: 3
            },
            repulse: {
              distance: 200,
              duration: 0.4
            },
            push: {
              particles_nb: 4
            },
            remove: {
              particles_nb: 2
            }
          }
        },
        retina_detect: true
      });

      requestAnimationFrame();
        }
        else if(window.location.pathname == '/privacy.html'||window.location.pathname == '/Privacy.html'){
           function privacyDynamic()
           { let privacyDynamicFor= document.getElementById('homepage');
                let privacyAncher=['https://www.torproject.org/','https://tails.boum.org/','https://www.wireshark.org/'];
                let privacyImg=['9','tails','wire'];
                let privacyH2=['Tor, ultimate protection for average users','Tails (OS)','Wireshark'];;
                let privacyP =
                ['Tor is free software for enabling anonymous communication. The name is derived from an acronym for the original software project name "The Onion Router".Tor directs Internet traffic through a free, worldwide, volunteer overlay network consisting of more than seven thousand relaysto conceal a users location and usage from anyone conducting network surveillance or traffic analysis. Using Tor makes it more difficult to trace Internet activity to the user: this includes "visits to Web sites, online posts, instant messages, and other communication forms".Tor is intended use is to protect the personal privacy of its users, as well as their freedom and ability to conduct confidential communication by keeping their Internet activities from being monitored.',
                'Tails or The Amnesic Incognito Live System is a security-focused Debian-based Linux distribution. Tails is a live operating system that you can start on almost any computer from a USB stick or a DVD. It aims at preserving your privacy and anonymity, and helps you to use the Internet anonymously and circumvent censorship; All connections to the Internet are forced to go through the Tor network, leave no trace on the computer you are using unless you ask it explicitly. And of course use state-of-the-art cryptographic tools to encrypt your files, emails and instant messaging. Important tool they used in their work with National Security Agency whistleblower Edward Snowden. Tails received funding from the Mozilla, company behind Firefox browser. First released on 23 June 2009 and now in 2018 it had it update (3.0) further enhancing security of its users',
                'Wireshark is a free and open-source packet analyzer. It is used for network troubleshooting, analysis.This shark is allows its users to what connections are programs using and how much.The analyzer operates on Unix, Linux and Microsoft Windows operating systems, and employs the GTK+ widget toolkit and pcap for packet capturing. Wireshark and other terminal-based free software versions like Tshark are released under the GNU General Public License. Wireshark shares many characteristics with tcpdump. The difference is that it supports a graphical user interface (GUI) and has information filtering features. In addition, Wireshark permits the user to see all the traffic being passed over the network.'
                ];

            for(let x in privacyAncher)
            {
                privacyDynamicFor.innerHTML+=`<section id="intro" class="last clear"><article><figure><a href="${privacyAncher[x]}"><img  src="images/demo/${privacyImg[x]}.jpg"></a><h2>${privacyH2[x]}</h2><p>${privacyP[x]}</p></figure></article></section>`;

            }

        }privacyDynamic();
            $('#container #homepage #intro article figure').css({'height':'350px'});
            $(' article figure img').css({'width':'200px','height':'350px'});
        $("#ikonica").css('color','#663399');
        $('a.gore').click(function(){ 
            $.scrollTo(0,'slow');
            return false;
          });
          $('a.scrollLink').click(function(){ 
            $.scrollTo();
            return false;
          });
        console.log('na stranici ste: privacy');
              function arrow(){
            document.getElementById('ikonica').addEventListener('mouseover',function(){
                this.style.color = "#232323" ;
            });
            document.getElementById('ikonica').addEventListener('mouseout',function(){
                this.style.color = "#663399" ;
            });
            }
            arrow();


        }
        else if(window.location.pathname == '/whistleblowers.html' || window.location.pathname == '/Whistleblowers.html')
        {
            var slideIndex = 0;
        function imgAdd() 
    {   let imgArray = ['nsa','prism','budget'];
        let writte82 =document.getElementById('slider');

        let x;
        for (x in imgArray)
        {
            writte82.innerHTML += `<img class="sliderPic" src="images/demo/nsa/${imgArray[x]}.jpg">`;

        }showSlides();
    }imgAdd();


       function showSlides() {
            var i;
            var slides = document.getElementsByClassName("sliderPic");
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            };
            slideIndex++;
            if (slideIndex > slides.length) {slideIndex = 1}
            slides[slideIndex-1].style.display = "block";
            setTimeout(showSlides, 7000); 
        };
            function whistleblowerDynamic()
           { 
               let whistleblowerDynamicFor= document.getElementById('homepage');
                let whistleblowerAncher=['https://en.wikipedia.org/wiki/Edward_Snowden','https://en.wikipedia.org/wiki/Julian_Assange#WikiLeaks','https://en.wikipedia.org/wiki/Anonymous_(group)'];
                let whistleblowerImg=['snowden','julian','chelsea'];
                let whistleblowerH2=['Edvard Snowden','Julian Assange','Chelsea Manning'];
                let whistleblowerP =

                ['Began his life un small city in North Carolina in fammily working in DoD and DoJ, so he was expected to work for goverment. Snowden started US Army special-forces training but due to leg injury he could not complete his training, but due to high IQ(145) he was approched by CIA regrutter for information-technology. He exceded his requirement and landed a job as NSA subcontractor in Hawaii, where he was fighting cyber attacks by Chinese and North Koreans. He was promoted and tasked to protect president on G20 Summit in Romania and was given diplomatic cover. After G20 summint he was statiend in Switzland, where he realised about top secret NSA-CIA program PRISM and 24/7 of data collection of every living person on the world without warrant. Snowden quickly download all files he could about suvivalance and flew to HongKong where he meet with The Guardian jouralist to realese news to public. Well the rest is hystory...',
                'Julian Assange(1971) born in  Queensland, Austrlia.Interested in computers from early teen years, and by the time of his 16 birthday he hacked in Pentagon, US DoD, Milnet,Nasa,LockedMartin,Motorola,Panasonic and others. Julian has been caught eventualy in 1994 and plead guilty in 1996 and resived fined of $2100.After all legal problems sorted out and almost finished University Julian and some colegues started WikiLeaks in 2006. Wikileaks published secret information,	news leaks, classified media form anonymous sources. Global public only discovered Wikileaks in 2010 when they published Chalesea Meaning drone attacks by US Military and cruel and harsh condition of inmates millitary prison Guantamo Bay. Americans didnt liked that Wikileaks leaked to much information, so Americans being Americans, they acused Julian and Wikileaks of treason act even tough they just published information.But support came from Brazilian,Ecuadrian,Russian, Spain goverments and UN Commssion for Humen Rights. Julian was granted asylum in by Ecuard and he is in Ecuardian Embassy as in London since august 2012. He even won 14 honours and award as journalist and activist.',
                'Chelsea Elizabeth Manning (born Bradley Edward Manning) is an American activist, whistleblower, and 2018 Senate candidate. She is a former United States Army soldier who was convicted by court-martial in July 2013 of violations of the Espionage Act and other offenses, after disclosing to WikiLeaks nearly 750,000 classified, or unclassified but sensitive, military and diplomatic documents, and was imprisoned between 2010 and 2017.Assigned in 2009 to an Army unit in Iraq as an intelligence analyst, Manning had access to classified databases. In early 2010, she leaked classified information to WikiLeaks and confided this to Adrian Lamo(who died in 2018), an online acquaintance. Lamo indirectly informed the Armys Criminal Investigation Command, and Manning was arrested in May that same year.The material included videos of the July 12, 2007, Baghdad airstrike, and the 2009 Granai airstrike in Afghanistan; 251.287 U.S. diplomatic cables; and 482.832 Army reports that came to be known as the "Iraq War Logs" and "Afghan War Diary". The material was published by WikiLeaks and its media partners between April 2010 and April 2011. '            
            ];
                let whistleblowerLearnMoreAncher=5;

            for(let x in whistleblowerAncher)
            {
                whistleblowerDynamicFor.innerHTML+=`<section id="intro" class="last clear"><article><figure><a href="${whistleblowerAncher[x]}"><img  src="images/demo/${whistleblowerImg[x]}.jpg"></a><h2>${whistleblowerH2[x]}</h2><p>${whistleblowerP[x]}</p><footer class="more"><a href="${whistleblowerAncher[x]}">${whistleblowerH2[x]}</a></footer></figure></article></section>`;

            }

        }whistleblowerDynamic();
        $(' article figure img').css({'width':'210px','height':'350px'});
        $('#container #homepage #intro article figure').css({'height':'350px'});
    ;
        $("#ikonica").css('color','#663399');
        $('a.gore').click(function(){ 
            $.scrollTo(0,'slow');
            return false;
          });
          $('a.scrollLink').click(function(){
            $.scrollTo();
            return false;
          });
        console.log('na stranici ste: whisleblowers');
              function arrow(){
            document.getElementById('ikonica').addEventListener('mouseover',function(){
                this.style.color = "#232323" ;
            });
            document.getElementById('ikonica').addEventListener('mouseout',function(){
                this.style.color = "#663399" ;
            });
            }
            arrow();
        }
        else if(window.location.pathname == '/about.html'||window.location.pathname == '/About.html'){
            $("#ikonica").css('color','#663399');
            function arrow(){
                document.getElementById('ikonica').addEventListener('mouseover',function(){
                    this.style.color = "#232323" ;
                });
                document.getElementById('ikonica').addEventListener('mouseout',function(){
                    this.style.color = "#663399" ;
                });
                }
                arrow();
            $('figure').css({'padding-bottom':'40px'});
            $('figure h2').css({'text-align':'center'});
            $('figure p').css({'margin':'5px','margin':'0 auto', 'text-align': 'center'});
            var slideIndex = 0;
            function imgAdd() 
        {   let imgArray = ['anon2','anon3','anon4','anon6','anon7'];
            let writte82 =document.getElementById('slider');
          console.log(writte82);    let x;
            for (x in imgArray)
            {
                writte82.innerHTML += `<img class="sliderPic" src="images/demo/${imgArray[x]}.jpg">`;

            }
        }imgAdd();

        showSlides();
           function showSlides() {
                var i;
                var slides = document.getElementsByClassName("sliderPic");
                for (i = 0; i < slides.length; i++) {
                    slides[i].style.display = "none";
                };
                slideIndex++;
                if (slideIndex > slides.length) {slideIndex = 1}
                slides[slideIndex-1].style.display = "block";
                setTimeout(showSlides, 7000); 
            };
            function aboutText()
            {
                let text = document.getElementById('aboutMainText');
                $('#firstAbout').css({'height':'370px','margin-right':'100px'});
                $('#firstAbout img').css('margin-top','50px');
                $('#firstAbout h2').css({'color':'#808080','text-align':'center'});
                text.innerHTML+=`Anon is a non-profit organization established to improve the privacy . 
                The organization was founded by a team of hacktivist adn privacy activists who for years has been engaged in exposing dark 
                crimes of big NETcompanies like Google, Microsoft, Amazon and intelligence agencies like NSA, CIA, Mi5, Mossad and others 
                The focus of our work is revealing who,how and why is spying on all levels of society. Our goal is to help readers to better
                 understand data breach, search manipulation, privacy invasion affect our lives. Moreover, Anon is building an online database 
                 of documents, which is a valuable resource for journalists and the public.Anon is involved in cross-border research projects. 
                 We are interested to help other media to develop their capacity for investigative journalism.So here it is 5 reason why privacy matters!`;
            }aboutText()
            function about5(){
                let h2Tagovi=
                [
                    '1. Limit on Power',
                    '2. Respect for Individuals',
                    '3. Reputation Management',
                    '4. Maintaining Appropriate Social Boundaries',
                    '5. Trust'
                ];
             let pTagovi =
             [
                'Privacy is a limit on government power, as well as the power of private sector companies.The more someone knows about us, the more power they can have over us. Personal data is used to make very important decisions in our lives. Personal data can be used to affect our reputations; and it can be used to influence our decisions and shape our behavior. It can be used as a tool to exercise control over us. And in the wrong hands, personal data can be used to cause us great harm.',
                'Privacy is about respecting individuals. If a person has a reasonable desire to keep something private, it is disrespectful to ignore that person’s wishes without a compelling reason to do so. Of course, the desire for privacy can conflict with important values, so privacy may not always win out in the balance. Sometimes people’s desires for privacy are just brushed aside because of a view that the harm in doing so is trivial. Even if this doesn’t cause major injury, it demonstrates a lack of respect for that person. In a sense it is saying: “I care about my interests, but I don’t care about yours.”',
                'Privacy enables people to manage their reputations. How we are judged by others affects our opportunities, friendships, and overall well-being. Although we can’t have complete control over our reputations, we must have some ability to protect our reputations from being unfairly harmed. Protecting reputation depends on protecting against not only falsehoods but also certain truths. Knowing private details about people’s lives doesn’t necessarily lead to more accurate judgment about people. People judge badly, they judge in haste, they judge out of context, they judge without hearing the whole story, and they judge with hypocrisy. Privacy helps people protect themselves from these troublesome judgments.',
                'People establish boundaries from others in society. These boundaries are both physical and informational. We need places of solitude to retreat to, places where we are free of the gaze of others in order to relax and feel at ease. We also establish informational boundaries, and we have an elaborate set of these boundaries for the many different relationships we have. Privacy helps people manage these boundaries. Breaches of these boundaries can create awkward social situations and damage our relationships. Privacy is also helpful to reduce the social friction we encounter in life. Most people don’t want everybody to know everything about them – hence the phrase “none of your business.” And sometimes we don’t want to know everything about other people — hence the phrase “too much information.”',
                'In relationships, whether personal, professional, governmental, or commercial, we depend upon trusting the other party. Breaches of confidentiality are breaches of that trust. In professional relationships such as our relationships with doctors and lawyers, this trust is key to maintaining candor in the relationship. Likewise, we trust other people we interact with as well as the companies we do business with. When trust is breached in one relationship, that could make us more reluctant to trust in other relationships.'    
            ]; 

            let aboutDynamic = document.querySelector('.aboutDynamic article figure');

            for(x in h2Tagovi)
            {
                aboutDynamic.innerHTML +=`<h2>${h2Tagovi[x]}</h2>`;

                aboutDynamic.innerHTML +=`<p>${pTagovi[x]}</p>`;
            }


         } about5();
        } 
        else if(window.location.pathname == '/author.html'||window.location.pathname == '/Author.html')
        {
            function authorDynamic()
            { 
                let authorDynamic= document.getElementById('homepage');
                 let authorImg=['auth'];
                 let authorH2=['Marko Scekic, the author',];
                 let authorP =['College student from Belgrade Serbia, age 20.Interested in cars, computer law, privacy activist, coding, computer hardware.Finished primary and middle school Kosta Abrasevic in my neighborhood and started Peta Ekonomska high school for economics, finnished high schol with ease and then started College Visoka ICT. Made this website for school project, but privacy is important in my life I , personaly I use TOR every day but it is slow due to encryption, so my "daily driver" is Firefox with uBlock, HTTPS Everywhere, Decentraleyes and Cookie AuotDelete extension for security and ultimate privacy.Even though I use Android phone,hower it uses open-source operating system so no back doors for NSA Google or other goverment agency. Google and all his products and services is ditched, DuckDuckGo handles my search pretty well but in recent couple days started using Start Page for his "Google" type of search result.Gmail is used only for school purposes only. About my school, Visoka ICT skola based in Belgrade, Serbia.'
                ];



                authorDynamic.innerHTML=`<section id="intro" class="last clear"><article><figure><img  src="images/demo/${authorImg[0]}.jpg"><h2>${authorH2[0]}</h2><p>${authorP[0]}
           <p>This website was built for school purpose only</p>
           <h2>331/17</h2>
                </footer></figure></article></section>`;


        } authorDynamic()
        $(' article figure img').css({'width':'400px','height':'435px'});
        $('#container #homepage #intro article figure').css({'height':'435px'});
    }
        else{}





        }); //document.ready
    }; ///windwo.onload