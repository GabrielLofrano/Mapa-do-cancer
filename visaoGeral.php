<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.8.0/dist/leaflet.css"
    integrity="sha512-hoalWLoI8r4UszCkZ5kL8vayOGVae1oxXe/2A4AO6J9+580uKHDO3JdHb7NzwwzK5xr/Fs0W40kiNHxM9vyTtQ=="
    crossorigin=""/>
    <link rel="stylesheet" href="style.css" />
	  <link rel="stylesheet" href="vgStyle.css" />
    <link rel="stylesheet" href="chart.js">
	  <link rel="preconnect" href="https://fonts.googleapis.com">
	  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	  <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
	  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
	  <script src="https://code.jquery.com/jquery-1.9.1.js"></script>
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <script type="text/javascript" src="./chartsVisaoGeral.js" defer></script>


    <title>Visão Geral</title>

  </head>
  <body>
    <?php require("navbar.php"); ?>

    <br>
    <h1 class="cityTittle">ANALISE DE CASOS E ÓBITOS GERAIS</h1>
    <br>
    <div class="row">


    <div class="col-xl-3 col-md-6 mb-4">
        <div class="card border-left-primary shadow h-100 py-2">
            <div class="card-body">
                <div class="row no-gutters align-items-center">
                    <div class="col mr-2">
                        <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
                            CASOS GERAIS: </div>
                        <div class="h5 mb-0 font-weight-bold text-gray-800">547.966</div>
                    </div>
                    <div class="col-auto">
                        <i class="fas fa-calendar fa-2x text-gray-300"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <div class="col-xl-3 col-md-6 mb-4">
        <div class="card border-left-success shadow h-100 py-2">
            <div class="card-body">
                <div class="row no-gutters align-items-center">
                    <div class="col mr-2">
                        <div class="text-xs font-weight-bold text-success text-uppercase mb-1">
                            ÓBITOS GERAIS: </div>
                        <div class="h5 mb-0 font-weight-bold text-gray-800">117.345</div>
                    </div>
                    <div class="col-auto">
                        <i class="fas fa-dollar-sign fa-2x text-gray-300"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <div class="col-xl-3 col-md-6 mb-4">
        <div class="card border-left-info shadow h-100 py-2">
            <div class="card-body">
                <div class="row no-gutters align-items-center">
                    <div class="col mr-2">
                        <div class="text-xs font-weight-bold text-info text-uppercase mb-1">MÉDIA DE CASOS POR ANO: 
                        </div>
                        <div class="row no-gutters align-items-center">
                            <div class="col-auto">
                                <div class="h5 mb-0 mr-3 font-weight-bold text-gray-800">24.907
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    
    <div class="col-xl-3 col-md-6 mb-4">
        <div class="card border-left-warning shadow h-100 py-2">
            <div class="card-body">
                <div class="row no-gutters align-items-center">
                    <div class="col mr-2">
                        <div class="text-xs font-weight-bold text-warning text-uppercase mb-1">
                            MÉDIA DE OBITOS POR ANO</div>
                        <div class="h5 mb-0 font-weight-bold text-gray-800">5.333</div>
                    </div>
                    <div class="col-auto">
                        <i class="fas fa-comments fa-2x text-gray-300"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>


    <div class="allCharts">

      <div class="chartsFirst">

        <div class=" col-8 my-5">
            <div class="card" id="card1">
                <div class="card-body">
                <h5>CASOS E OBITOS GERAIS</h5>
                <hr>
                <div>
                    <canvas height="125%" id="thirdChart"></canvas>
                </div>
                </div>
            </div>
        </div>


        <div class="my-5">
                <div class="card" id="card3">
                    <div class="card-body">
                    <h5>NÚMERO DE CASOS DE CÂNCER DE PULMÃO, PRÓSTATA E MAMA</h5>
                    <hr>
                    <div>
                        <canvas height="490px" id="fifthChart"></canvas>
                    </div>
                    </div>

                </div>
            </div>

      </div>
      <div class="chartsSecond">

            <div class="col-8  my-5">
                <div class="card" id="card2">
                    <div class="card-body">
                    <h5>CASOS DE CÂNCER DE PULMÃO, PRÓSTATA E MAMA</h5>
                    <hr>
                    <div>
                        <canvas id="firstChart"></canvas>
                    </div>
                    </div>

                </div>
            </div>

            <div class="my-5">
            <div class="card" id="card4">
                <div class="card-body">
                <h5>CASOS DE CÂNCER DE PULMÃO EM HOMENS E MULHERES</h5>
                <hr>
                <div>
                    <canvas height="585px" id="fourthChart"></canvas>
                </div>
                </div>

            </div>
        </div>
        </div> 
        
        <div class="chartsFirst">

        <div class="col-8  my-5">
            <div class="card" id="card2">
                <div class="card-body">
                <h5>CASOS DE CÂNCER DE MAMA POR IDADE</h5>
                <hr>
                <div>
                    <canvas id="secondChart"></canvas>
                </div>
                </div>

            </div>
        </div>

        <div class="my-5">
            <div class="card" id="card5">
                <div class="card-body">
                <h5>CASOS DE CÂNCER DE MAMA POR CÓDIGO PARA NEOPLASIAS </h5>
                <hr>
                <div>
                    <canvas height="585px" id="sixthChart"></canvas>
                </div>
                </div>

            </div>
        </div>
        
        </div>
        
      </div>
    </div>
  </body>
</html>