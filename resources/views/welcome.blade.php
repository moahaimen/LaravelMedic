<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Medical Products Store</title>

        <!-- Styles -->
        <style>
            html, body {
                background-color: #e4e4e4;
                font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
                font-weight: 500;
                margin: 0;
                padding: 0;
            }

            .full-height {
                height: 100vh;
            }

            .flex-center {
                align-items: center;
                display: flex;
                justify-content: center;
            }

            .content {
                text-align: center;
                /* background-color: #fff; */
                /* border: 1px solid rgba(0, 0, 0, 0.125); */
                border-radius: .25rem;
                padding: 10pt 20pt;
                min-height: 250pt;
                position: relative;
            }

            .title {
                font-size: 84px;
                color: #17a2b8;
            }

            .sub-title {
                font-size: 24px;
                color: #343a40;
            }

            .link {
                text-decoration: none;
                color: #6610f2;
            }

            .footer {
                position: absolute;
                bottom: 4pt;
                text-align: center;
                width: 100%;
            }

        </style>
    </head>
    <body>
        <div class="flex-center position-ref full-height">
            <div class="content">
                <div class="title m-b-md">
                   Welcome
                   <div class="sub-title">
                       Medical products store
                   </div>
                </div>

                <div class="footer">
                    <a class="link" href="https://nazirallaham.000webhostapp.com">Mhd Nazeer Allahham</a>
                </div>
            </div>
        </div>
    </body>
</html>
