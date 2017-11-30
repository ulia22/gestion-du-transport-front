
 
  onKeyUpImmatriculation($event){
    this.stringImmatriculation=$event.target.value
  }

  onKeyUpMarque($event){
    this.stringMarque=$event.target.value
  }


  onBoolPhoto($event){
    if($event.target.value!="")
      this.validePhoto=true
    else
      this.validePhoto=false
  }

  onBoolMarque($event){
    if($event.target.value!="")
      this.valideMarque=true
    else
      this.valideMarque=false
  }

  onBoolImmatriculation1($event){
    if($event.target.value!="" && $event.target.value.length >=2)
      this.valideImmatriculation1=true
    else
      this.valideImmatriculation1=false
  }

  onBoolImmatriculation2($event){
    if($event.target.value!="" && $event.target.value >= 100)
      this.valideImmatriculation2=true
    else
      this.valideImmatriculation2=false
  }

  onBoolImmatriculation3($event){
    if($event.target.value!="" && $event.target.value.length >=2)
      this.valideImmatriculation3=true
    else
      this.valideImmatriculation3=false
  }

  onBoolModele($event){
    if($event.target.value!="")
      this.valideModele=true
    else
      this.valideModele=false
  }

  onBoolNbp($event){
    if($event.target.value!="")
      this.valideNbp=true
    else
      this.valideNbp=false
  }

}
