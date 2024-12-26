module App

open Sutil

let view() =
    Html.div [
        Html.div [ text "Hello World" ]
        ItemDisplay.genSample.Value

    ]

view() |> Program.mount