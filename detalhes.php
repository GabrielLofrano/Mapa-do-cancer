<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.8.0/dist/leaflet.css"
    integrity="sha512-hoalWLoI8r4UszCkZ5kL8vayOGVae1oxXe/2A4AO6J9+580uKHDO3JdHb7NzwwzK5xr/Fs0W40kiNHxM9vyTtQ=="
    crossorigin=""/>
    <link rel="stylesheet" href="style.css" />
	<link rel="stylesheet" href="dStyle.css" />
    <link rel="stylesheet" href="chart.js">
    <link rel="stylesheet" href="pie.js">  
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
	<script src="https://code.jquery.com/jquery-1.9.1.js"></script>
	<script src="path-para-seu-script"></script>
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <title>Detalhes</title>
    
    <?php 
        ini_set('memory_limit', '686870912');
        $state = $_GET["estado"];
        $city = $_GET["cidade"];
        $json = file_get_contents('detail-data.json');
        $json2 = file_get_contents('index-data.json');
        $json_data = json_decode($json, true);
        $json_data2 = json_decode($json2, true);
        $data = $json_data[$state][$city];
        $data2 = $json_data2[$state][$city];
    ?>
    <script>

        const data = <?php

        function sum_bar_chart_male($carry, $item)
        {
            return $carry + $item;
        }

        function sum_bar_chart_female($carry, $item)
        {
            return $carry + $item;
        }
        
        function map_bar_chart($item)
        {
            $total_male = array_reduce($item["masculino"]["total"], "sum_bar_chart_male", 0);
            $total_female = array_reduce($item["feminino"]["total"], "sum_bar_chart_female", 0);
            
            return $total_male + $total_female;
        }



            
        $result = [];

        foreach ($data as $key => $value) {
            if ($key != "state") {
                $data_numbers =  array_values(array_map("map_bar_chart", $value));

                array_push($result, [
                    "label" => ucwords($key),
                    "backgroundColor" => [$key == "mama" ? "red" : ($key == "prostata" ? "blue" : "green")],
                    "data" => $data_numbers,
                    "borderWidth" => 1,
                ]);
            }
        }

        print_r(json_encode($result));
        ?>;



        const data2 = <?php

            $colors[0] = 'red';
            $colors[1] = 'blue';
            $colors[2] = 'green';
            $labels[0] = 'Mama';
            $labels[1] = 'Próstata';
            $labels[2] = 'Pulmão';

            $result2 = [];

            $i = 0;

                if ($key != "state") {
                    $total_prostate = array_reduce($data["prostata"], "sum_total", 0);
                    $total_mamma = array_reduce($data["mama"], "sum_total", 0);
                    $total_lung = array_reduce($data["pulmao"], "sum_total", 0);
                    $data_numbers2 = [];
                    $data_numbers2[1] = $total_prostate ;
                    $data_numbers2[0] = $total_mamma;
                    $data_numbers2[2] = $total_lung;

                    array_push($result2, [
                        "labels" => $labels,
                        "backgroundColor" => $colors,
                        "data" => $data_numbers2, 
                    ]);
                    $i++;
                }
            

            print_r(json_encode($result2));
        ?>;
















        const data3 = <?php

        function sum_total_male_pie($carry, $item)
        {
            return $carry + $item;
        }

        function sum_total_female_pie($carry, $item)
        {
            return $carry + $item;
        }

        function sum_total_pie_male($carry, $item)
        {
            $total_male = array_reduce($item["masculino"]["total"], "sum_total_male_pie", 0);

            return $carry + $total_male;
        }
        function sum_total_pie_female($carry, $item)
        {
            $total_female = array_reduce($item["feminino"]["total"], "sum_total_female_pie", 0);

            return $carry + $total_female;
        }


        $colors2[0] = 'blue';
        $colors2[1] = 'red';
        $labels2[0] = 'Homem';
        $labels2[1] = 'Mulher';


        $result2 = [];

        $i = 0;

            if ($key != "state") {
                $soma;
                $data_female_total = [];
                $data_male_total = [];
                foreach ($data as $key => $value) {
                    $soma_male[0] = array_reduce($data["prostata"], "sum_total_pie_male", 0);
                    $soma_male[1] = array_reduce($data["pulmao"], "sum_total_pie_male", 0);
                    $soma_male[3] = array_reduce($data["mama"], "sum_total_pie_male", 0);

                    $soma_female[0] = array_reduce($data["prostata"], "sum_total_pie_female", 0);
                    $soma_female[1] = array_reduce($data["pulmao"], "sum_total_pie_female", 0);
                    $soma_female[3] = array_reduce($data["mama"], "sum_total_pie_female", 0);
                    }

                    $soma[0] = array_sum($soma_male);
                    $soma[1] = array_sum($soma_female);



                array_push($result2, [
                    "labels" => $labels2,
                    "backgroundColor" => $colors2,
                    "data" => $soma, 
                ]);
                $i++;
            }


        print_r(json_encode($result2));
        ?>;


const data4 = <?php


    
$result = [];
$k=0;
foreach ($data as $key => $value) {
    $total_prostate = array_reduce($data["prostata"], "sum_total", 0);
    $total_mamma = array_reduce($data["mama"], "sum_total", 0);
    $total_lung = array_reduce($data["pulmao"], "sum_total", 0);
    $tudo[$k] = $data_numbers3 =  array_values(array_map("map_bar_chart", $value));
    $k++;
}
$mama = $tudo[0];
$prostata = $tudo[1];
$pulmao = $tudo[2];
$nome = "Casos";
for ($p=0; $p < 21; $p++) { 
    $soma5[$p] = $mama[$p] + $prostata[$p] + $pulmao[$p];
}


    if ($key != "state") {

        array_push($result, [
            "label" => $nome,
            "backgroundColor" => [$key == "prostata" ? "red" : ($key == "mama" ? "green" : "blue")],
            "borderColor" => $colors2[0],
            "data" => $soma5,
            "borderWidth" => 1,
        ]);
    }


print_r(json_encode($result));
?>;





    </script>
    <script type="text/javascript" src="chartsDetalhes.js" defer></script>
  </head>
  <body>
  <?php require("navbar.php"); ?>
    <br>
    <h1 class="cityTittle">ANALISE DE CASOS E ÓBITOS EM <?php print_r(mb_strtoupper($city));?>, <?php print_r(mb_strtoupper($state));?></h1>


    <div class="row">


    <div class="col-xl-3 col-md-6 mb-4">
        <div class="card border-left-primary shadow h-100 py-2">
            <div class="card-body">
                <div class="row no-gutters align-items-center">
                    <div class="col mr-2">
                        <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
                            CASOS GERAIS: </div>
                        <div class="h5 mb-0 font-weight-bold text-gray-800"><?php
                            function sum_total_male($carry, $item)
                            {
                                return $carry + $item;
                            }

                            function sum_total_female($carry, $item)
                            {
                                return $carry + $item;
                            }

                            function sum_total($carry, $item)
                            {
                                $total_male = array_reduce($item["masculino"]["total"], "sum_total_male", 0);
                                $total_female = array_reduce($item["feminino"]["total"], "sum_total_female", 0);

                                return $carry + $total_male + $total_female;
                            }



                            

                            $total_prostate = array_reduce($data["prostata"], "sum_total", 0);
                            $total_mamma = array_reduce($data["mama"], "sum_total", 0);
                            $total_lung = array_reduce($data["pulmao"], "sum_total", 0);
                            
                            $total = $total_prostate + $total_mamma + $total_lung;

                            print_r($total);

                            
                            ?>
                            <script></script>
                        </div>
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
                        <div class="h5 mb-0 font-weight-bold text-gray-800">
                        <?php
                            print_r($data2["death"]);
                            ?>
                        </div>
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
                                <div class="h5 mb-0 mr-3 font-weight-bold text-gray-800">
                                    <?php print_r((int)($total / 22));?>
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
                        <div class="h5 mb-0 font-weight-bold text-gray-800">
                        <?php print_r((int)($data2["death"] / 22));?>
                        </div>
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
                        <h5>CASOS GERAIS</h5>
                        <hr>
                        <div>
                            <canvas height="80%"  id="thirdChart"></canvas>
                        </div>
                        </div>

                    </div>
            </div>


            <div class="my-5">
                <div class="card" id="card2">
                    <div class="card-body">
                    <h5>NÚMERO DE CASOS DE CÂNCER DE PULMÃO, PRÓSTATA E MAMA</h5>
                    <hr>
                    <div>
                        <canvas width="580%" height="525px" id="secondChart"></canvas>

                    </div>
                    </div>

                </div>
            </div>
        </div>

        <div class="chartsFirst">                    
            <div class="col-8  my-5">
                    <div class="card" id="card3">
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
                    <h5>CASOS EM HOMENS E MULHERES</h5>
                    <hr>
                    <div>
                        <canvas width="580%" id="fouthChart"></canvas>
                    </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
    </body>
</html>