Blockly.common.defineBlocksWithJsonArray([
    {
        "type": "behaviortree",
        "message0": "BehaviorTree ID %1 %2 %3",
        "args0": [
            {
                "type": "field_input",
                "name": "behaviortree",
                "text": "MainTreeX"
            },
            {
                "type": "input_dummy"
            },
            {
                "type": "input_statement",
                "name": "decorator"
            }
        ],
        "colour": 0,
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "sequence",
        "message0": "Sequence %1 %2",
        "args0": [
            {
                "type": "input_dummy"
            },
            {
                "type": "input_statement",
                "name": "action"
            }
        ],
        "previousStatement": null,
        "colour": 135,
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "sequencewithmemory",
        "message0": "SequenceWithMemory %1 %2",
        "args0": [
            {
                "type": "input_dummy"
            },
            {
                "type": "input_statement",
                "name": "action"
            }
        ],
        "previousStatement": null,
        "colour": 135,
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "reactivesequence",
        "message0": "ReactiveSequence %1 %2",
        "args0": [
            {
                "type": "input_dummy"
            },
            {
                "type": "input_statement",
                "name": "action"
            }
        ],
        "previousStatement": null,
        "colour": 135,
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "fallback",
        "message0": "FallBack %1 %2",
        "args0": [
            {
                "type": "input_dummy"
            },
            {
                "type": "input_statement",
                "name": "action"
            }
        ],
        "previousStatement": null,
        "colour": 135,
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "reactivefallback",
        "message0": "ReactiveFallBack %1 %2",
        "args0": [
            {
                "type": "input_dummy"
            },
            {
                "type": "input_statement",
                "name": "action"
            }
        ],
        "previousStatement": null,
        "colour": 135,
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "ifthenelse",
        "message0": "IfThenElse %1 %2",
        "args0": [
            {
                "type": "input_dummy"
            },
            {
                "type": "input_statement",
                "name": "action"
            }
        ],
        "previousStatement": null,
        "colour": 135,
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "whiledoelse",
        "message0": "WhileDoElse %1 %2",
        "args0": [
            {
                "type": "input_dummy"
            },
            {
                "type": "input_statement",
                "name": "action"
            }
        ],
        "previousStatement": null,
        "colour": 135,
        "tooltip": "",
        "helpUrl": ""
    },

    {
        "type": "retryuntilsuccessful",
        "message0": "RetryUntilSuccessful  num_attempts %1 %2 %3",
        "args0": [
            {
                "type": "field_number",
                "name": "num_attempts",
                "value": 3
            },
            {
                "type": "input_dummy"
            },
            {
                "type": "input_statement",
                "name": "control"
            }
        ],
        "inputsInline": false,
        "previousStatement": null,
        "colour": 195,
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "keeprunninguntilfailure",
        "message0": "KeepRunningUntilFailure %1 %2",
        "args0": [
            {
                "type": "input_dummy"
            },
            {
                "type": "input_statement",
                "name": "control"
            }
        ],
        "inputsInline": false,
        "previousStatement": null,
        "colour": 195,
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "inverter",
        "message0": "Inverter %1 %2",
        "args0": [
            {
                "type": "input_dummy"
            },
            {
                "type": "input_statement",
                "name": "control"
            }
        ],
        "inputsInline": false,
        "previousStatement": null,
        "colour": 195,
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "repeat",
        "message0": "Repeat  num_cycles %1 %2 %3",
        "args0": [
            {
                "type": "field_number",
                "name": "num_cycles",
                "value": 0
            },
            {
                "type": "input_dummy"
            },
            {
                "type": "input_statement",
                "name": "control"
            }
        ],
        "inputsInline": false,
        "previousStatement": null,
        "colour": 195,
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "delay",
        "message0": "Delay delay_msec %1 %2 %3",
        "args0": [
            {
                "type": "field_number",
                "name": "delay_msec",
                "value": 5000
            },
            {
                "type": "input_dummy"
            },
            {
                "type": "input_statement",
                "name": "control"
            }
        ],
        "inputsInline": false,
        "previousStatement": null,
        "colour": 195,
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "forcefailure",
        "message0": "ForceFailure %1 %2",
        "args0": [
            {
                "type": "input_dummy"
            },
            {
                "type": "input_statement",
                "name": "control"
            }
        ],
        "inputsInline": false,
        "previousStatement": null,
        "colour": 195,
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "forcesuccess",
        "message0": "ForceSuccess %1 %2",
        "args0": [
            {
                "type": "input_dummy"
            },
            {
                "type": "input_statement",
                "name": "control"
            }
        ],
        "inputsInline": false,
        "previousStatement": null,
        "colour": 195,
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "timeout",
        "message0": "Timeout   msec %1 %2 %3",
        "args0": [
            {
                "type": "field_number",
                "name": "timeout_msec",
                "value": 5000
            },
            {
                "type": "input_dummy"
            },
            {
                "type": "input_statement",
                "name": "control"
            }
        ],
        "inputsInline": false,
        "previousStatement": null,
        "colour": 195,
        "tooltip": "",
        "helpUrl": ""
    },

    {
        "type": "scriptcode",
        "message0": "Script code %1",
        "args0": [
            {
                "type": "field_input",
                "name": "Script",
                "text": "a:=1"
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 315,
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "movebase",
        "message0": "MoveBase  x %1 y %2 a %3",
        "args0": [
            {
                "type": "field_number",
                "name": "movebase-x",
                "value": 0,
            },
            {
                "type": "field_number",
                "name": "movebase-y",
                "value": 0,
            },
            {
                "type": "field_number",
                "name": "movebase-a",
                "value": 0,
                "min": -6.28,
                "max": 6.28
            }
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": 315,
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "estimatebasepose",
        "message0": "EstimateBasePose  x %1 y %2 a %3",
        "args0": [
            {
                "type": "field_number",
                "name": "EstimateBasePose-x",
                "value": 0,
            },
            {
                "type": "field_number",
                "name": "EstimateBasePose-y",
                "value": 0,
            },
            {
                "type": "field_number",
                "name": "EstimateBasePose-a",
                "value": 0,
                "min": -6.28,
                "max": 6.28
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 315,
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "basestraight",
        "message0": "BaseStraight  speed %1 time %2",
        "args0": [
            {
                "type": "field_number",
                "name": "basestraight-speed",
                "value": 0,
            },
            {
                "type": "field_number",
                "name": "basestraight-time",
                "value": 0,
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 315,
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "baserotate",
        "message0": "BaseRotate speed %1 time %2",
        "args0": [
            {
                "type": "field_number",
                "name": "baserotate-speed",
                "value": 0
            },
            {
                "type": "field_number",
                "name": "baserotate-time",
                "value": 0
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 315,
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "dock",
        "message0": "Dock",
        "previousStatement": null,
        "nextStatement": null,
        "colour": 315,
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "pickobjectfromstation",
        "message0": "PickObjectFromStation  object %1",
        "args0": [
            {
                "type": "field_input",
                "name": "pickobjectfromstation-object",
                "text": "apple"
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 315,
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "pickobjectfromrobot",
        "message0": "PickObjectFromRobot  object %1",
        "args0": [
            {
                "type": "field_input",
                "name": "pickobjectfromrobot-object",
                "text": "apple"
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 315,
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "pickobjectonstation",
        "message0": "PickObjectOnStation  object %1",
        "args0": [
            {
                "type": "field_input",
                "name": "pickobjectonstation-object",
                "text": "apple"
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 315,
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "pickobjectonrobot",
        "message0": "PickObjectOnRobot  object %1",
        "args0": [
            {
                "type": "field_input",
                "name": "pickobjectonrobot-object",
                "text": "apple"
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 315,
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "switchgripper",
        "message0": "SwitchGripper",
        "previousStatement": null,
        "nextStatement": null,
        "colour": 315,
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "manipulatorhome",
        "message0": "ManipulatorHome  location %1",
        "args0": [
            {
                "type": "field_dropdown",
                "name": "location",
                "options": [
                    [
                        "Robot",
                        "Robot"
                    ],
                    [
                        "Station",
                        "Station"
                    ]
                ]
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 315,
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "movemanipulator",
        "message0": "MoveManipulator  x %1 y %2 z %3 rx %4 ry %5 rz %6",
        "args0": [
            {
                "type": "field_number",
                "name": "movemanipulator-x",
                "value": 0,
                "min": 0
            },
            {
                "type": "field_number",
                "name": "movemanipulator-y",
                "value": 0,
                "min": 0
            },
            {
                "type": "field_number",
                "name": "movemanipulator-z",
                "value": 0,
                "min": 0
            },
            {
                "type": "field_number",
                "name": "movemanipulator-rx",
                "value": 0,
                "min": 0
            },
            {
                "type": "field_number",
                "name": "movemanipulator-ry",
                "value": 0,
                "min": 0
            },
            {
                "type": "field_number",
                "name": "movemanipulator-rz",
                "value": 0,
                "min": 0
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 315,
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "grip",
        "message0": "Grip state %1",
        "args0": [
            {
                "type": "field_dropdown",
                "name": "state",
                "options": [
                    [
                        "True",
                        "True"
                    ],
                    [
                        "False",
                        "False"
                    ]
                ]
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 315,
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "light",
        "message0": "Light  color %1 period %2",
        "args0": [
            {
                "type": "field_dropdown",
                "name": "color",
                "options": [
                    [
                        "Red",
                        "Red"
                    ],
                    [
                        "Green",
                        "Green"
                    ],
                    [
                        "Blue",
                        "Blue"
                    ],
                    [
                        "Yellow",
                        "Yellow"
                    ]
                ]
            },
            {
                "type": "field_input",
                "name": "period",
                "text": "1.0"
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 315,
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "voice",
        "message0": "Voice text %1",
        "args0": [
            {
                "type": "field_input",
                "name": "text",
                "text": "Hello"
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 315,
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "shutdown",
        "message0": "Shutdown",
        "previousStatement": null,
        "nextStatement": null,
        "colour": 315,
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "restart",
        "message0": "Restart",
        "previousStatement": null,
        "nextStatement": null,
        "colour": 315,
        "tooltip": "",
        "helpUrl": ""
    },
]);

var toolbox = {
    "kind": "categoryToolbox",
    "contents": [
        {
            "kind": "category",
            "name": "BehaviorTree",
            "colour": "0",
            "contents": [
                {
                    'kind': 'block',
                    'type': 'behaviortree'
                },

            ]
        },
        {
            "kind": "category",
            "name": "Control",
            "colour": "75",
            "contents": [
                {
                    "kind": "category",
                    "name": "Sequences",
                    "colour": "135",
                    "contents": [
                        {
                            'kind': 'block',
                            'type': 'sequence'
                        },
                        {
                            'kind': 'block',
                            'type': 'sequencewithmemory'
                        },
                        {
                            'kind': 'block',
                            'type': 'reactivesequence'
                        },
                    ]
                },
                {
                    "kind": "category",
                    "name": "Fallback",
                    "colour": "135",
                    "contents": [
                        {
                            'kind': 'block',
                            'type': 'fallback'
                        },
                        {
                            'kind': 'block',
                            'type': 'reactivefallback'
                        },
                    ]
                },
                {
                    "kind": "category",
                    "name": "Other",
                    "colour": "135",
                    "contents": [
                        {
                            'kind': 'block',
                            'type': 'ifthenelse'
                        },
                        {
                            'kind': 'block',
                            'type': 'whiledoelse'
                        },
                    ]
                },
            ]
        },
        {
            "kind": "category",
            "name": "Decorator",
            "colour": "195",
            "contents": [
                {
                    'kind': 'block',
                    'type': 'retryuntilsuccessful'
                },
                {
                    'kind': 'block',
                    'type': 'keeprunninguntilfailure'
                },
                {
                    'kind': 'block',
                    'type': 'inverter'
                },
                {
                    'kind': 'block',
                    'type': 'repeat'
                },
                {
                    'kind': 'block',
                    'type': 'delay'
                },
                {
                    'kind': 'block',
                    'type': 'forcefailure'
                },
                {
                    'kind': 'block',
                    'type': 'forcesuccess'
                },
                {
                    'kind': 'block',
                    'type': 'timeout'
                },
            ]
        },
        {
            "kind": "category",
            "name": "Action",
            "colour": "270",
            "contents": [
                {
                    "kind": "category",
                    "name": "Script",
                    "colour": "315",
                    "contents": [
                        {
                            'kind': 'block',
                            'type': 'scriptcode'
                        },
                    ]
                },
                {
                    "kind": "category",
                    "name": "Mobile Base",
                    "colour": "315",
                    "contents": [
                        {
                            'kind': 'block',
                            'type': 'movebase'
                        },
                        {
                            'kind': 'block',
                            'type': 'estimatebasepose'
                        },
                        {
                            'kind': 'block',
                            'type': 'basestraight'
                        },
                        {
                            'kind': 'block',
                            'type': 'baserotate'
                        },
                        {
                            'kind': 'block',
                            'type': 'dock'
                        },
                    ]
                },
                {
                    "kind": "category",
                    "name": "Manipulator",
                    "colour": "315",
                    "contents": [
                        {
                            'kind': 'block',
                            'type': 'pickobjectfromstation'
                        },
                        {
                            'kind': 'block',
                            'type': 'pickobjectfromrobot'
                        },
                        {
                            'kind': 'block',
                            'type': 'pickobjectonstation'
                        },
                        {
                            'kind': 'block',
                            'type': 'pickobjectonrobot'
                        },
                        {
                            'kind': 'block',
                            'type': 'switchgripper'
                        },
                        {
                            'kind': 'block',
                            'type': 'manipulatorhome'
                        },
                        {
                            'kind': 'block',
                            'type': 'movemanipulator'
                        },
                        {
                            'kind': 'block',
                            'type': 'grip'
                        },
                    ]
                },
                {
                    "kind": "category",
                    "name": "Miscellaneous",
                    "colour": "315",
                    "contents": [
                        {
                            'kind': 'block',
                            'type': 'light'
                        },
                        {
                            'kind': 'block',
                            'type': 'voice'
                        },
                        {
                            'kind': 'block',
                            'type': 'shutdown'
                        },
                        {
                            'kind': 'block',
                            'type': 'restart'
                        },
                    ]
                }
            ]
        },
    ]
}

var workspace = Blockly.inject('blockly-div', { toolbox: toolbox });

