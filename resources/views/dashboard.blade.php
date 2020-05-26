@extends('layouts.app', ['pageSlug' => 'dashboard'])

@section('content')
    <div class="row">
        <div class="col-12">
            <div class="card card-chart">
                <div class="card-header ">
                    <div class="row">
                        <div class="col-sm-6 text-left">
                            <h5 class="card-category">Total Nuevos Contagios España</h5>
                            <h5 class="card-category fecha"></h5>
                            <h2 class="card-title" id="total_nuevos"><i class="tim-icons icon-bell-55 text-warning"></i></h2>
                        </div>

                    </div>
                </div>
                <div class="card-body">
                    <div class="chart-area">
                        <canvas id="chartBig1"></canvas>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-lg-4">
            <div class="card card-chart">
                <div class="card-header">
                    <h5 class="card-category">Total Contagios</h5>
                    <h5 class="card-category fecha"></h5>
                    <h3 class="card-title" id="total_casos"><i class="tim-icons icon-bell-55 text-primary"></i></h3>
                </div>
                <div class="card-body">
                    <div class="chart-area">
                        <canvas id="chartLinePurple"></canvas>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-lg-4">
            <div class="card card-chart">
                <div class="card-header">
                    <h5 class="card-category">Total Muertes</h5>
                    <h5 class="card-category fecha"></h5>
                    <h3 class="card-title" id="total_muertes"><i class="tim-icons icon-paper text-info"></i></h3>
                </div>
                <div class="card-body">
                    <div class="chart-area">
                        <canvas id="CountryChart"></canvas>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-lg-4">
            <div class="card card-chart">
                <div class="card-header">
                    <h5 class="card-category">Total Recuperados</h5>
                    <h5 class="card-category fecha"></h5>
                    <h3 class="card-title" id="total_recuperados"><i class="tim-icons icon-send text-success"></i></h3>
                </div>
                <div class="card-body">
                    <div class="chart-area">
                        <canvas id="chartLineGreen"></canvas>
                    </div>
                </div>
            </div>
        </div>
    </div>

@endsection

@push('js')
    <script src="{{ asset('black') }}/js/plugins/chartjs.min.js"></script>
    <script>
        $(document).ready(function() {
            $.get("https://coronavirus-19-api.herokuapp.com/countries", function (data) {
          demo.initDashboardPageCharts(data);
            });
        });
    </script>
@endpush
