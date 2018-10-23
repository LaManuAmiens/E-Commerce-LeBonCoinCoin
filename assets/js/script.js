$(function(){
  $(".bg-danger").hide();
  $(".bg-secondary").hide();
  $(".bg-info").hide();
  $(".bg-dark").hide();

  $("#products").click(function() {
    $(".bg-warning").show();
    $(".bg-danger").hide();
    $(".bg-secondary").hide();
    $(".bg-info").hide();
    $(".bg-dark").hide();
  });

  $("#services").click(function() {
    $(".bg-warning").hide();
    $(".bg-danger").show();
    $(".bg-secondary").hide();
    $(".bg-info").hide();
    $(".bg-dark").hide();
  });

  $("#software").click(function() {
    $(".bg-warning").hide();
    $(".bg-danger").hide();
    $(".bg-secondary").show();
    $(".bg-info").hide();
    $(".bg-dark").hide();
  });

  $("#repair").click(function() {
    $(".bg-warning").hide();
    $(".bg-danger").hide();
    $(".bg-secondary").hide();
    $(".bg-info").show();
    $(".bg-dark").hide();
  });

  $("#sales").click(function() {
    $(".bg-warning").hide();
    $(".bg-danger").hide();
    $(".bg-secondary").hide();
    $(".bg-info").hide();
    $(".bg-dark").show();
  });

  $(".btnPanier").click(function(){
    var nmbrProduit1 = $("#mouseSmile option:selected").val(); //récupération de la valeur correspondante à la quantité choisie par l'utilisateur dans le select
    var nmbrProduit2 = $("#mouseCry option:selected").val();
    var nmbrProduit3 = $("#mouseSDuck option:selected").val();
    var nmbrProduit4 = $("#zeroFlouz option:selected").val();
    var nmbrProduit5 = $("#flouz option:selected").val();
    var nmbrProduit6 = $("#bigFlouz option:selected").val();
    var nmbrProduit7 = $("#MWS option:selected").val();
    var nmbrProduit8 = $("#aI option:selected").val();
    var nmbrProduit9 = $("#rI option:selected").val();
    var nmbrProduit10 = $("#dO option:selected").val();
    var nmbrProduit11 = $("#ACC option:selected").val();

    var produit1 = nmbrProduit1 * 10; //multiplication de la variable correspondante à la quantité de produits par le prix du produit dans une nouvelle variable qui désignera le sous-total pour ce produit
    var produit2 = nmbrProduit2 * 20;
    var produit3 = nmbrProduit3 * 50;
    var produit4 = nmbrProduit4 * 5;
    var produit5 = nmbrProduit5 * 1000;
    var produit6 = nmbrProduit6 * 5000;
    var produit7 = nmbrProduit7 * 50000;
    var produit8 = nmbrProduit8 * 100000;
    var produit9 = nmbrProduit9 * 110000;
    var produit10 = nmbrProduit10 * 140000;
    var produit11 = nmbrProduit11 * 100000;

    var total = produit1 + produit2 + produit3 + produit4 + produit5 + produit6 + produit7 + produit8 + produit9 + produit10 + produit11; //création de la variable total qui additionne tous les sous-totaux

    if (produit1 == 0) {
      $("#displayProduit1").hide(); //si le sous-toal est égal à zero c'est qu'il n'y a aucun produit choisi, donc il ne faut pas l'afficher dans le panier
    } else {
      $("#displayProduit1").show(); //affichage dans le panier si le sous-total du produit associé est supérieur à zero
      $("#produitPanier1").val(nmbrProduit1); //modification de la valeur de l'input pour qu'il affiche le nombre de produits choisis dans le select par l'utilsateur
      $("#sousTotal1").val(produit1) //modification de la valeur de l'input pour qu'il affiche le sous-total correspondant au produit choisi par l'utilisateur
    }
    if (produit2 == 0) {
      $("#displayProduit2").hide();
    } else {
      $("#displayProduit2").show();
      $("#produitPanier2").val(nmbrProduit2);
      $("#sousTotal2").val(produit2)
    }
    if (produit3 == 0) {
      $("#displayProduit3").hide();
    } else {
      $("#displayProduit3").show();
      $("#produitPanier3").val(nmbrProduit3);
      $("#sousTotal3").val(produit3)
    }
    if (produit4 == 0) {
      $("#displayProduit4").hide();
    } else {
      $("#displayProduit4").show();
      $("#produitPanier4").val(nmbrProduit4);
      $("#sousTotal4").val(produit4)
    }
    if (produit5 == 0) {
      $("#displayProduit5").hide();
    } else {
      $("#displayProduit5").show();
      $("#produitPanier5").val(nmbrProduit5);
      $("#sousTotal5").val(produit5)
    }
    if (produit6 == 0) {
      $("#displayProduit6").hide();
    } else {
      $("#displayProduit6").show();
      $("#produitPanier6").val(nmbrProduit6);
      $("#sousTotal6").val(produit6)
    }
    if (produit7 == 0) {
      $("#displayProduit7").hide();
    } else {
      $("#displayProduit7").show();
      $("#produitPanier7").val(nmbrProduit7);
      $("#sousTotal7").val(produit7)
    }
    if (produit8 == 0) {
      $("#displayProduit8").hide();
    } else {
      $("#displayProduit8").show();
      $("#produitPanier8").val(nmbrProduit8);
      $("#sousTotal8").val(produit8)
    }
    if (produit9 == 0) {
      $("#displayProduit9").hide();
    } else {
      $("#displayProduit9").show();
      $("#produitPanier9").val(nmbrProduit9);
      $("#sousTotal9").val(produit9)
    }
    if (produit10 == 0) {
      $("#displayProduit10").hide();
    } else {
      $("#displayProduit10").show();
      $("#produitPanier10").val(nmbrProduit10);
      $("#sousTotal10").val(produit10)
    }
    if (produit11 == 0) {
      $("#displayProduit11").hide();
    } else {
      $("#displayProduit11").show();
      $("#produitPanier11").val(nmbrProduit11);
      $("#sousTotal11").val(produit11)
    }
    $("#maintenantFautRaquer").val(total); //modification de la valeur dans l'input correspondant au total pour afficher le total à payer par l'utilisateur

    //début des incrémentations/décrémentations accrochez-vous bien c'est long
    $("#moins1").click(function(){
      if (nmbrProduit1 >= 2){
        nmbrProduit1 --; //décrémentation du nombre de produits
        $("#produitPanier1").val(nmbrProduit1); //modification de la variable dans l'input pour affichage
        total = total - 10; //retrait de la somme correspondante au produit lors de la décrémentation au total
        $("#maintenantFautRaquer").val(total); //modification de la variable total alors modifiée pour affichage
        produit1 = produit1 - 10; //retrait de la somme dans le sous-total
        $("#sousTotal1").val(produit1); //modification de la variable dans l'input pour affichage
        $("#mouseSmile").val(nmbrProduit1); //modification de la variable dans le select de la carte correspondante
      } else {
        total = total - 10;
        $("#maintenantFautRaquer").val(total);
        $("#displayProduit1").hide(); //si la valeur du nombre de produit atteint 0 alors l'article est caché dans le panier
        $("#mouseSmile").val(0); //remise à zero dans le select de la carte correspondante
      }
    })
    $("#moins2").click(function(){
      if (nmbrProduit2 >= 2){
        nmbrProduit2 --;
        $("#produitPanier2").val(nmbrProduit2);
        total = total - 20;
        $("#maintenantFautRaquer").val(total);
        produit2 = produit2 - 20;
        $("#sousTotal2").val(produit2);
        $("#mouseCry").val(nmbrProduit2);
      } else {
        total = total - 20;
        $("#maintenantFautRaquer").val(total);
        $("#displayProduit2").hide();
        $("#mouseCry").val(0);
      }
    })
    $("#moins3").click(function(){
      if (nmbrProduit3 >= 2){
        nmbrProduit3 --;
        $("#produitPanier3").val(nmbrProduit3);
        total = total - 50;
        $("#maintenantFautRaquer").val(total);
        produit3 = produit3 - 50;
        $("#sousTotal3").val(produit3);
        $("#mouseSDuck").val(nmbrProduit3)
      } else {
        total = total - 50;
        $("#maintenantFautRaquer").val(total);
        $("#displayProduit3").hide();
        $("#mouseSDuck").val(0);
      }
    })
    $("#moins4").click(function(){
      if (nmbrProduit4 >= 2){
        nmbrProduit4 --;
        $("#produitPanier4").val(nmbrProduit4);
        total = total - 5;
        $("#maintenantFautRaquer").val(total);
        produit4 = produit4 - 5;
        $("#sousTotal4").val(produit4);
        $("#zeroFlouz").val(nmbrProduit4);
      } else {
        total = total - 5;
        $("#maintenantFautRaquer").val(total);
        $("#displayProduit4").hide();
        $("#zeroFlouz").val(0);
      }
    })
    $("#moins5").click(function(){
      if (nmbrProduit5 >= 2){
        nmbrProduit5 --;
        $("#produitPanier5").val(nmbrProduit5);
        total = total - 1000;
        $("#maintenantFautRaquer").val(total);
        produit5 = produit5 - 1000;
        $("#sousTotal5").val(produit5);
        $("#flouz").val(nmbrProduit5);
      } else {
        total = total - 1000;
        $("#maintenantFautRaquer").val(total);
        $("#displayProduit6").hide();
        $("#flouz").val(0);
      }
    })
    $("#moins6").click(function(){
      if (nmbrProduit6 >= 2){
        nmbrProduit6 --;
        $("#produitPanier6").val(nmbrProduit6);
        total = total - 5000;
        $("#maintenantFautRaquer").val(total);
        produit6 = produit6 - 5000;
        $("#sousTotal6").val(produit6);
        $("#bigFlouz").val(nmbrProduit6);
      } else {
        total = total - 5000;
        $("#maintenantFautRaquer").val(total);
        $("#displayProduit6").hide();
        $("#bigFlouz").val(0);
      }
    })
    $("#moins7").click(function(){
      if (nmbrProduit7 >= 2){
        nmbrProduit7 --;
        $("#produitPanier7").val(nmbrProduit7);
        total = total - 50000;
        $("#maintenantFautRaquer").val(total);
        produit7 = produit7 - 50000;
        $("#sousTotal7").val(produit7);
        $("#MWS").val(nmbrProduit7);
      } else {
        total = total - 50000;
        $("#maintenantFautRaquer").val(total);
        $("#displayProduit7").hide();
        $("#MWS").val(0);
      }
    })
    $("#moins8").click(function(){
      if (nmbrProduit8 >= 2) {
        nmbrProduit8 --;
        $("#produitPanier8").val(nmbrProduit8);
        total = total - 100000;
        $("#maintenantFautRaquer").val(total);
        produit8 = produit8 - 100000;
        $("#sousTotal8").val(produit8);
        $("#aI").val(nmbrProduit8);
      } else {
        total = total - 100000;
        $("#maintenantFautRaquer").val(total);
        $("#displayProduit8").hide();
        $("#aI").val(0);
      }
    })
    $("#moins9").click(function(){
      if (nmbrProduit9 >= 2){
        nmbrProduit9 --;
        $("#produitPanier9").val(nmbrProduit9);
        total = total - 110000;
        $("#maintenantFautRaquer").val(total);
        produit9 = produit9 - 110000;
        $("#sousTotal9").val(produit9);
        $("#dO").val(nmbrProduit9);
      } else {
        total = total - 110000;
        $("#maintenantFautRaquer").val(total);
        $("#displayProduit9").hide();
        $("#dO").val(0);
      }
    })
    $("#moins10").click(function(){
      if (nmbrProduit10 >= 2){
        nmbrProduit10 --;
        $("#produitPanier10").val(nmbrProduit10);
        total = total - 140000;
        $("#maintenantFautRaquer").val(total);
        produit10 = produit10 - 140000;
        $("#sousTotal10").val(produit10);
        $("#rI").val(nmbrProduit10);
      } else {
        total = total - 140000;
        $("#maintenantFautRaquer").val(total);
        $("#displayProduit10").hide();
        $("#rI").val(0);
      }
    })
    $("#moins11").click(function(){
      if (nmbrProduit11 >= 2){
        nmbrProduit11 --;
        $("#produitPanier11").val(nmbrProduit11);
        total = total - 100000;
        $("#maintenantFautRaquer").val(total);
        produit11 = produit11 - 100000;
        $("#sousTotal11").val(produit11);
        $("#ACC").val(nmbrProduit11);
      } else {
        total = total - 100000;
        $("#maintenantFautRaquer").val(total);
        $("#displayProduit11").hide();
        $("#ACC").val(0);
      }
    })
    $("#plus1").click(function(){
      if (nmbrProduit1 <= 2) {
        nmbrProduit1 ++;
        $("#produitPanier1").val(nmbrProduit1);
        total = total + 10;
        $("#maintenantFautRaquer").val(total);
        produit1 = produit1 + 10;
        $("#sousTotal1").val(produit1);
        $("#mouseSmile").val(nmbrProduit1);
      } else {
        nmbrProduit1 ++;
        $("#produitPanier1").val(nmbrProduit1);
        total = total + 10;
        $("#maintenantFautRaquer").val(total);
        produit1 = produit1 + 10;
        $("#sousTotal1").val(produit1);
        $("#mouseSmile").append(new Option(nmbrProduit1, nmbrProduit1)); //création d'une nouvelle option dans le select au moment de l'incrémentation si le client veut plus que 3 produits.
        $("#mouseSmile").val(nmbrProduit1);
      }
    })
    $("#plus2").click(function(){
      if (nmbrProduit2 <= 2) {
        nmbrProduit2 ++;
        $("#produitPanier2").val(nmbrProduit2);
        total = total + 20;
        $("#maintenantFautRaquer").val(total);
        produit2 = produit2 + 20;
        $("#sousTotal2").val(produit2);
      } else {
        nmbrProduit2 ++;
        $("#produitPanier2").val(nmbrProduit2);
        total = total + 20;
        $("#maintenantFautRaquer").val(total);
        produit2 = produit2 + 20;
        $("#sousTotal2").val(produit2);
        $("#mouseCry").append(new Option(nmbrProduit2, nmbrProduit2));
        $("#mouseCry").val(nmbrProduit2);
      }
    })
    $("#plus3").click(function(){
      if (nmbrProduit3 <= 2) {
        nmbrProduit3 ++;
        $("#produitPanier3").val(nmbrProduit3);
        total = total + 50;
        $("#maintenantFautRaquer").val(total);
        produit3 = produit3 + 50;
        $("#sousTotal3").val(produit3);
      } else {
        nmbrProduit3 ++;
        $("#produitPanier3").val(nmbrProduit3);
        total = total + 50;
        $("#maintenantFautRaquer").val(total);
        produit3 = produit3 + 50;
        $("#sousTotal3").val(produit3);
        $("#mouseSDuck").append(new Option(nmbrProduit3, nmbrProduit3));
        $("#mouseSDuck").val(nmbrProduit3);
      }
    })
    $("#plus4").click(function(){
      if (nmbrProduit4 <= 2) {
        nmbrProduit4 ++;
        $("#produitPanier4").val(nmbrProduit4);
        total = total + 5;
        $("#maintenantFautRaquer").val(total);
        produit4 = produit4 + 5;
        $("#sousTotal4").val(produit4);
      } else {
        nmbrProduit4 ++;
        $("#produitPanier4").val(nmbrProduit4);
        total = total + 5;
        $("#maintenantFautRaquer").val(total);
        produit4 = produit4 + 5;
        $("#sousTotal4").val(produit4);
        $("#zeroFlouz").append(new Option(nmbrProduit4, nmbrProduit4));
        $("#zeroFlouz").val(nmbrProduit4);
      }
    })
    $("#plus5").click(function(){
      if (nmbrProduit5 <= 2) {
        nmbrProduit5 ++;
        $("#produitPanier5").val(nmbrProduit5);
        total = total + 1000;
        $("#maintenantFautRaquer").val(total);
        produit5 = produit5 + 1000;
        $("#sousTotal5").val(produit5);
      } else {
        nmbrProduit5 ++;
        $("#produitPanier5").val(nmbrProduit5);
        total = total + 1000;
        $("#maintenantFautRaquer").val(total);
        produit5 = produit5 + 1000;
        $("#sousTotal5").val(produit5);
        $("#flouz").append(new Option(nmbrProduit5, nmbrProduit5));
        $("#flouz").val(nmbrProduit5);
      }
    })
    $("#plus6").click(function(){
      if (nmbrProduit6 <= 2) {
        nmbrProduit6 ++;
        $("#produitPanier6").val(nmbrProduit6);
        total = total + 5000;
        $("#maintenantFautRaquer").val(total);
        produit6 = produit6 + 5000;
        $("#sousTotal6").val(produit6);
      } else {
        nmbrProduit6 ++;
        $("#produitPanier6").val(nmbrProduit6);
        total = total + 5000;
        $("#maintenantFautRaquer").val(total);
        produit6 = produit6 + 5000;
        $("#sousTotal6").val(produit6);
        $("#bigFlouz").append(new Option(nmbrProduit6, nmbrProduit6));
        $("#bigFlouz").val(nmbrProduit6);
      }
    })
    $("#plus7").click(function(){
      if (nmbrProduit7 <= 2) {
        nmbrProduit7 ++;
        $("#produitPanier7").val(nmbrProduit7);
        total = total + 50000;
        $("#maintenantFautRaquer").val(total);
        produit7 = produit7 + 50000;
        $("#sousTotal7").val(produit7);
      } else {
        nmbrProduit7 ++;
        $("#produitPanier7").val(nmbrProduit7);
        total = total + 50000;
        $("#maintenantFautRaquer").val(total);
        produit7 = produit7 + 50000;
        $("#sousTotal7").val(produit7);
        $("#MWS").append(new Option(nmbrProduit7, nmbrProduit7));
        $("#MWS").val(nmbrProduit7);
      }
    })
    $("#plus8").click(function(){
      if (nmbrProduit8) {
        nmbrProduit8 ++;
        $("#produitPanier8").val(nmbrProduit8);
        total = total + 100000;
        $("#maintenantFautRaquer").val(total);
        produit8 = produit8 + 100000;
        $("#sousTotal8").val(produit8);
      } else {
        nmbrProduit8 ++;
        $("#produitPanier8").val(nmbrProduit8);
        total = total + 100000;
        $("#maintenantFautRaquer").val(total);
        produit8 = produit8 + 100000;
        $("#sousTotal8").val(produit8);
        $("#aI").append(new Option(nmbrProduit8, nmbrProduit8));
        $("#aI").val(nmbrProduit8);
      }
    })
    $("#plus9").click(function(){
      if (nmbrProduit9 <= 2) {
        nmbrProduit9 ++;
        $("#produitPanier9").val(nmbrProduit9);
        total = total + 110000;
        $("#maintenantFautRaquer").val(total);
        produit9 = produit9 + 110000;
        $("#sousTotal9").val(produit9);
      } else {
        nmbrProduit9 ++;
        $("#produitPanier9").val(nmbrProduit9);
        total = total + 110000;
        $("#maintenantFautRaquer").val(total);
        produit9 = produit9 + 110000;
        $("#sousTotal9").val(produit9);
        $("#dO").append(new Option(nmbrProduit9, nmbrProduit9));
        $("#dO").val(nmbrProduit9);
      }
    })
    $("#plus10").click(function(){
      if (nmbrProduit10 <=2) {
        nmbrProduit10 ++;
        $("#produitPanier10").val(nmbrProduit10);
        total = total + 140000;
        $("#maintenantFautRaquer").val(total);
        produit10 = produit10 + 140000;
        $("#sousTotal10").val(produit10);
      } else {
        nmbrProduit10 ++;
        $("#produitPanier10").val(nmbrProduit10);
        total = total + 140000;
        $("#maintenantFautRaquer").val(total);
        produit10 = produit10 + 140000;
        $("#sousTotal10").val(produit10);
        $("#rI").append(new Option(nmbrProduit10, nmbrProduit10));
        $("#rI").val(nmbrProduit10);
      }
    })
    $("#plus11").click(function(){
      if (nmbrProduit11 <= 2) {
        nmbrProduit11 ++;
        $("#produitPanier11").val(nmbrProduit11);
        total = total + 100000;
        $("#maintenantFautRaquer").val(total);
        produit11 = produit11 + 100000;
        $("#sousTotal11").val(produit11);
      } else {
        nmbrProduit11 ++;
        $("#produitPanier11").val(nmbrProduit11);
        total = total + 100000;
        $("#maintenantFautRaquer").val(total);
        produit11 = produit11 + 100000;
        $("#sousTotal11").val(produit11);
        $("#ACC").append(new Option(nmbrProduit11, nmbrProduit11));
        $("#ACC").val(nmbrProduit11);
      }
    })
  })
  $("#pigeon").click(function(){
    alert("Le collectif LeBonCoinCoin vous remercie de votre investissement mais ce n'est qu'un site test. En revanche, si vous disposez d'une volonté sans faille (et d'un énorme compte en banque), vous pouvez envoyer vos coordonnées bancaires (numéro de carte, date d'expiration et cryptogramme visuel) à vallois-nicolas@outlook.fr (et oui je prends la tune parce que c'est moi qui ai fait la modal). Bisous à vous, au revoir !")
  })
})
