module App

open Sutil
// let nav() =
//     Html.header [
//         Html.ul [
//             Html.li
//         ]
//     ]
let view() =
    let userText = Store.make ""
    Html.div [
        Html.div [ text "Hello World" ]
        Html.div [
            Html.textarea [
                Bind.attr("value", userText)
            ]
        ]
        Html.div [
            Bind.el(userText, fun text' ->
                let output = WeaponDps.runItem text' |> String.concat "\r\n"
                Html.pre [text output ]
            )
        ]
        ItemDisplay.genSample.Value

    ]

view() |> Program.mount