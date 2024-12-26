module ItemDisplay

open Sutil

let genSample =
    lazy(
        Html.divc "poe-item" [
            Html.divc "poe-item-name" [text "Taste of Hate"]
            Html.divc "poe-item-type" [text "Sapphire Flask"]
            Html.divc "poe-item-rarity" [text "Unique"]
            Html.divc "poe-item-stats"[
                Html.spanc "poe-item-stat poe-item-stat-positive" [ text "+50% to Cold Resistance during Flask Effect"]
                Html.spanc "poe-item-stat poe-item-stat-negative" [ text "20% less Cold Damage taken" ]
            ]
            Html.divc "poe-item-requirements" [ text "Requires Level 18"]
            Html.divc "poe-item-flavor-text" [ text "A sip can chill the heart and desiccate the soul."]
        ]
    )