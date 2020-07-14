          function submitToAPI(e) {
               e.preventDefault();
               var name = $("#YOUR <NAME> INPUT ID").val();
               var email = $("#YOUR <EMAIL> INPUT ID").val();
               var desc = $("#YOUR <DESCRIPTION> INPUT ID").val();
             if (name=="" || email=="" || desc=="")
                {
                    alert("Please Fill All Required Field");
                    return false;
                }
            nameRE = /^([a-zA-Z]{2,16})$/;
            if(!nameRE.test(name)) {
              alert("Name entered, is not valid");
                return false;
            }
            emailRE = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            if(!emailRE.test(email)) {
              alert("Email Address entered, is not valid");
                return false;
            }
               var data = {
                  name : name,
                  email: email,
                  desc : desc
                };
            var xmlhttp = new XMLHttpRequest();
            xmlhttp.open("POST", "YOUR POST URL");
            xmlhttp.setRequestHeader("Content-Type", "application/json");
            xmlhttp.send(JSON.stringify(data));
            xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState === 4) {
              var response = JSON.parse(xmlhttp.responseText);
              if (xmlhttp.status === 200 ) {
                console.log('successful');
                      console.log("Thank you for Contacting Me\nI will get back to you soon!");
                  alert("Thank you for Contacting Me\nI will get back to you soon!");
                } else {
                  console.log('failed');
              }
            }
          }
          }
