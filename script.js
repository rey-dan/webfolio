window.addEventListener('load', function(){

    // Navigation bar for mobile
    var menubar = this.document.getElementById("menubar");
    var closebar = this.document.getElementById("close");
    var items = this.document.getElementsByClassName("navbar_item");
    var pages = this.document.getElementsByClassName("page");
    const content = this.document.getElementById("content");

    menubar.addEventListener('click', function(){
        menubar.style.display = "none";
        closebar.style.display = "inline-block";
        for(let i = 0; i < items.length; i++){
            items[i].style.display = "block";
        }
    });
    closebar.addEventListener('click', function(){
        menubar.style.display = "inline-block";
        closebar.style.display = "none";
        for(let i = 0; i < items.length; i++){
            items[i].style.display = "none";
        }
    });

    // Resizing adjustments for navigation bar
    this.addEventListener('resize', function(){
        if(this.innerWidth > 480){
            for(let i = 0; i < items.length; i++){
                items[i].addEventListener('click', function(){
                    if(pages[i].firstElementChild.innerHTML == ""){
                        document.getElementById("title_bar").innerHTML = "DAN";
                    } else{
                        document.getElementById("title_bar").innerHTML = pages[i].firstElementChild.innerHTML;
                    }
                });
            }
            menubar.style.display = "none";
            closebar.style.display = "none";
            for(let i = 0; i < items.length; i++){
                items[i].style.display = "block";
            }
        } else if(this.innerWidth < 480){
            menubar.style.display = "inline-block";
            closebar.style.display = "none";
            for(let i = 0; i < items.length; i++){
                items[i].style.display = "none";
            }
            
            for(let i = 0; i < items.length; i++){
                items[i].addEventListener('click', function(){
                    if(pages[i].firstElementChild.innerHTML == ""){
                        document.getElementById("title_bar").innerHTML = "DAN";
                    } else{
                        document.getElementById("title_bar").innerHTML = pages[i].firstElementChild.innerHTML;
                    }
                });
            }
            menubar.style.display = "inline-block";
            closebar.style.display = "none";
            for(let i = 0; i < items.length; i++){
                items[i].style.display = "none";
            }
        }

        if(this.innerWidth >= 1024){
            content.addEventListener("scroll", function(){
                var height = pages[0].scrollHeight;
                var scrolled = content.scrollTop;
                for(let i = 0; i < pages.length; i++){
                    if(pages[i].offsetTop < scrolled + height/2 && scrolled < pages[i].offsetTop + height/2){
                        if(pages[i].firstElementChild.innerHTML == ""){
                            document.getElementById("title_bar").innerHTML = "DAN";
                        } else{
                            document.getElementById("title_bar").innerHTML = pages[i].firstElementChild.innerHTML;
                        }
                        console.log("height: " + height + "; scrolled: " + scrolled + "; offset: " + pages[i].offsetTop)        
                    }
                }
            });
        } else{
            this.addEventListener("scroll", function(){
                var height = this.innerHeight;
                var scrolled = this.scrollY;
                for(let i = 0; i < pages.length; i++){
                    if(pages[i].offsetTop < scrolled + height/2 && scrolled < pages[i].offsetTop + height/2){
                        if(pages[i].firstElementChild.innerHTML == ""){
                            document.getElementById("title_bar").innerHTML = "DAN";
                        } else{
                            document.getElementById("title_bar").innerHTML = pages[i].firstElementChild.innerHTML;
                        }  
                        console.log("height: " + height + "; scrolled: " + scrolled + "; offset: " + pages[i].offsetTop)   
                    }
                }
            });
        }
    });

    
    if(this.innerWidth >= 1024){
        content.addEventListener("scroll", function(){
            var height = pages[0].scrollHeight;
            var scrolled = content.scrollTop;
            for(let i = 0; i < pages.length; i++){
                if(pages[i].offsetTop < scrolled + height/2 && scrolled < pages[i].offsetTop + height/2){
                    if(pages[i].firstElementChild.innerHTML == ""){
                        document.getElementById("title_bar").innerHTML = "DAN";
                    } else{
                        document.getElementById("title_bar").innerHTML = pages[i].firstElementChild.innerHTML;
                    }
                    console.log("height: " + height + "; scrolled: " + scrolled + "; offset: " + pages[i].offsetTop)        
                }
            }
        });
    } else{
        this.addEventListener("scroll", function(){
            var height = this.innerHeight;
            var scrolled = this.scrollY;
            for(let i = 0; i < pages.length; i++){
                if(pages[i].offsetTop < scrolled + height/2 && scrolled < pages[i].offsetTop + height/2){
                    if(pages[i].firstElementChild.innerHTML == ""){
                        document.getElementById("title_bar").innerHTML = "DAN";
                    } else{
                        document.getElementById("title_bar").innerHTML = pages[i].firstElementChild.innerHTML;
                    }  
                    console.log("height: " + height + "; scrolled: " + scrolled + "; offset: " + pages[i].offsetTop)   
                }
            }
        });
    }

    // Technology card
    var card = this.document.getElementById("card");
    var front = this.document.getElementById("front");
    var back = this.document.getElementById("back");

    setInterval(function(){
        if(card.style.transform == "rotateY(180deg)"){
            card.style.transform = "rotateY(0deg)";
        } else{
            card.style.transform = "rotateY(180deg)";
        }
    }, 2000);

    var counter = 3;
    setTimeout(function(){
        setInterval(function(){
            if(counter == 1){
                front.src = "img/technologies/"+ counter + ".jpg";
                counter ++;
            } else if(counter == 2){
                back.src = "img/technologies/"+ counter + ".jpg";
                counter ++;
            } else if(counter == 22){
                back.src = "img/technologies/"+ counter + ".jpg";
                counter = 1;
            } else if(counter%2 > 0){
                front.src = "img/technologies/"+ counter + ".jpg";
                counter ++;
            } else if(counter%2 == 0){
                back.src = "img/technologies/"+ counter + ".jpg";
                counter ++;
            }
        }, 2000);
    }, 1000)
});