'use strict';

// goog.module('xmlGenerator');

// goog.require('Blockly.Generator');

var xmlGenerator = new Blockly.Generator('XML');

xmlGenerator.addReservedWords(
    // https://www.ibm.com/docs/en/iotdm/11.3?topic=interface-quick-reference-guide-xml-keywords-values
    'report,replace,workitem,input,output,hadoopcache,filepattern,filetype,fielddelimiter,datadelimeter,escapecharacter,parallel,strictmetadata,' +
    'bulksize,charsetname,continueonerror,maxerrorfile,maxerrorrun,action,node,field,datatype,path,datapresence,'
);

xmlGenerator.ORDER_ATOMIC = 0;
xmlGenerator.ORDER_NONE = 0;
xmlGenerator.PRECEDENCE = 0;

xmlGenerator.init = function (workspace) { };

xmlGenerator.finish = function (code) {
    return code;
};

xmlGenerator.scrub_ = function (block, code) {
    var nextBlock = block.nextConnection && block.nextConnection.targetBlock();
    var nextCode = xmlGenerator.blockToCode(nextBlock);
    return code + nextCode;
};

function removeIndentAndTrailingNewline() { }

xmlGenerator['behaviortree'] = function (block) {
    var text_behaviortree = block.getFieldValue('behaviortree');
    var statements_decorator = xmlGenerator.statementToCode(block, 'decorator');
    // TODO: Assemble JavaScript into code variable.
    var code = '<root>\n' + ' <BehaviorTree ID="' + text_behaviortree + '">\n' + statements_decorator + ' </BehaviorTree>\n' + '</root>\n';
    return code;
};

xmlGenerator['retryuntilsuccessful'] = function (block) {
    var number_num_attempts = block.getFieldValue('num_attempts');
    var statements_control = xmlGenerator.statementToCode(block, 'control');
    // TODO: Assemble JavaScript into code variable.
    var code = '<RetryUntilSuccessful num_attempts="' + number_num_attempts + '">\n' + statements_control + '</RetryUntilSuccessful>\n';
    return code;
};

xmlGenerator['keeprunninguntilfailure'] = function (block) {
    var statements_control = xmlGenerator.statementToCode(block, 'control');
    // TODO: Assemble JavaScript into code variable.
    var code = '<KeepRunningUntilFailure>\n' + statements_control + '</KeepRunningUntilFailure>\n';
    return code;
};

xmlGenerator['inverter'] = function (block) {
    var statements_control = xmlGenerator.statementToCode(block, 'control');
    // TODO: Assemble JavaScript into code variable.
    var code = '<Inverter>\n' + statements_control + '</Inverter>\n';
    return code;
};

xmlGenerator['repeat'] = function (block) {
    var number_num_cycles = block.getFieldValue('num_cycles');
    var statements_control = xmlGenerator.statementToCode(block, 'control');
    // TODO: Assemble JavaScript into code variable.
    var code = '<Repeat num_cycles="' + number_num_cycles + '">\n' + statements_control + '</Repeat>\n';
    return code;
};

xmlGenerator['delay'] = function (block) {
    var number_delay_msec = block.getFieldValue('delay_msec');
    var statements_control = xmlGenerator.statementToCode(block, 'control');
    // TODO: Assemble JavaScript into code variable.
    var code = '<Delay delay_msec="' + number_delay_msec + '">\n' + statements_control + '</Delay>\n';
    return code;
};

xmlGenerator['forcefailure'] = function (block) {
    var statements_control = xmlGenerator.statementToCode(block, 'control');
    // TODO: Assemble JavaScript into code variable.
    var code = '<ForceFailure>\n' + statements_control + '</ForceFailure>\n';
    return code;
};

xmlGenerator['forcesuccess'] = function (block) {
    var statements_control = xmlGenerator.statementToCode(block, 'control');
    // TODO: Assemble JavaScript into code variable.
    var code = '<ForceSuccess>\n' + statements_control + '</ForceSuccess>\n';
    return code;
};

xmlGenerator['timeout'] = function (block) {
    var number_timeout_msec = block.getFieldValue('timeout_msec');
    var statements_control = xmlGenerator.statementToCode(block, 'control');
    // TODO: Assemble JavaScript into code variable.
    var code = '<Timeout msec="' + number_timeout_msec + '">\n' + statements_control + '</Timeout>\n';
    return code;
};

xmlGenerator['sequence'] = function (block) {
    var statements_action = xmlGenerator.statementToCode(block, 'action');
    // TODO: Assemble JavaScript into code variable.
    var code = '<Sequence>\n' + statements_action + '</Sequence>\n';
    return code;
};

xmlGenerator['sequencewithmemory'] = function (block) {
    var statements_action = xmlGenerator.statementToCode(block, 'action');
    // TODO: Assemble JavaScript into code variable.
    var code = '<SequenceWithMemory>\n' + statements_action + '</SequenceWithMemory>\n';
    return code;
};

xmlGenerator['reactivesequence'] = function (block) {
    var statements_action = xmlGenerator.statementToCode(block, 'action');
    // TODO: Assemble JavaScript into code variable.
    var code = '<ReactiveSequence>\n' + statements_action + '</ReactiveSequence>\n';
    return code;
};

xmlGenerator['fallback'] = function (block) {
    var statements_action = xmlGenerator.statementToCode(block, 'action');
    // TODO: Assemble JavaScript into code variable.
    var code = '<Fallback>\n' + statements_action + '</Fallback>\n';
    return code;
};

xmlGenerator['reactivefallback'] = function (block) {
    var statements_action = xmlGenerator.statementToCode(block, 'action');
    // TODO: Assemble JavaScript into code variable.
    var code = '<ReactiveFallback>\n' + statements_action + '</ReactiveFallback>\n';
    return code;
};

xmlGenerator['ifthenelse'] = function (block) {
    var statements_action = xmlGenerator.statementToCode(block, 'action');
    // TODO: Assemble JavaScript into code variable.
    var code = '<IfThenElse>\n' + statements_action + '</IfThenElse>\n';
    return code;
};

xmlGenerator['whiledoelse'] = function (block) {
    var statements_action = xmlGenerator.statementToCode(block, 'action');
    // TODO: Assemble JavaScript into code variable.
    var code = '<WhileDoElse>\n' + statements_action + '</WhileDoElse>\n';
    return code;
};

xmlGenerator['scriptcode'] = function (block) {
    var text_script = block.getFieldValue('Script');
    // TODO: Assemble JavaScript into code variable.
    var code = '<Script code = "' + text_script + '" />\n';
    return code;
};

xmlGenerator['movebase'] = function (block) {
    var number_movebase_x = block.getFieldValue('movebase-x');
    var number_movebase_y = block.getFieldValue('movebase-y');
    var number_movebase_a = block.getFieldValue('movebase-a');
    // TODO: Assemble JavaScript into code variable.
    var code = '<SubTree ID="MoveBase" x="' + number_movebase_x + '" y="' + number_movebase_y + '" a="' + number_movebase_a + '" />\n';
    return code;
};

xmlGenerator['estimatebasepose'] = function (block) {
    var number_estimatebasepose_x = block.getFieldValue('estimatebasepose-x');
    var number_estimatebasepose_y = block.getFieldValue('estimatebasepose-y');
    var number_estimatebasepose_a = block.getFieldValue('estimatebasepose-a');
    // TODO: Assemble JavaScript into code variable.
    var code = '<SubTree ID="EstimateBasePose" x="' + number_estimatebasepose_x + '" y="' + number_estimatebasepose_y + '" a="' + number_estimatebasepose_a + '" />\n';
    return code;
};

xmlGenerator['basestraight'] = function (block) {
    var number_basestraight_speed = block.getFieldValue('basestraight-speed');
    var number_basestraight_time = block.getFieldValue('basestraight-time');
    // TODO: Assemble JavaScript into code variable.
    var code = '<SubTree ID="BaseStraight" speed="' + number_basestraight_speed + '" time="' + number_basestraight_time + '" />\n';
    return code;
};

xmlGenerator['baserotate'] = function (block) {
    var number_baserotate_speed = block.getFieldValue('baserotate-speed');
    var number_baserotate_time = block.getFieldValue('baserotate-time');
    // TODO: Assemble JavaScript into code variable.
    var code = '<SubTree ID="BaseRotate" speed="' + number_baserotate_speed + '" time="' + number_baserotate_time + '" />\n';
    return code;
};

xmlGenerator['dock'] = function (block) {
    // TODO: Assemble JavaScript into code variable.
    var code = '<Dock />\n';
    return code;
};

xmlGenerator['pickobjectfromstation'] = function (block) {
    var text_pickobjectfromstation_object = block.getFieldValue('pickobjectfromstation-object');
    // TODO: Assemble JavaScript into code variable.
    var code = '<SubTree ID="PickObjectFromStation" object="' + text_pickobjectfromstation_object + '" />\n';
    return code;
};

xmlGenerator['pickobjectfromrobot'] = function (block) {
    var text_pickobjectfromrobot_object = block.getFieldValue('pickobjectfromrobot-object');
    // TODO: Assemble JavaScript into code variable.
    var code = '<SubTree ID="PickObjectFromRobot" object="' + text_pickobjectfromrobot_object + '" />\n';
    return code;
};

xmlGenerator['pickobjectonstation'] = function (block) {
    var text_pickobjectonstation_object = block.getFieldValue('pickobjectonstation-object');
    // TODO: Assemble JavaScript into code variable.
    var code = '<SubTree ID="PlaceObjectOnStation" object="' + text_pickobjectonstation_object + '" />\n';
    return code;
};

xmlGenerator['pickobjectonrobot'] = function (block) {
    var text_pickobjectonrobot_object = block.getFieldValue('pickobjectonrobot-object');
    // TODO: Assemble JavaScript into code variable.
    var code = '<SubTree ID="PlaceObjectOnRobot" object="' + text_pickobjectonrobot_object + '" />\n';
    return code;
};

xmlGenerator['switchgripper'] = function (block) {
    // TODO: Assemble JavaScript into code variable.
    var code = '<SubTree ID="SwitchGripper" />\n';
    return code;
};

xmlGenerator['manipulatorhome'] = function (block) {
    var dropdown_location = block.getFieldValue('location');
    // TODO: Assemble JavaScript into code variable.
    var code = '<SubTree ID="ManipulatorHome" location="' + dropdown_location + '" />\n';
    return code;
};

xmlGenerator['movemanipulator'] = function (block) {
    var number_movemanipulator_x = block.getFieldValue('movemanipulator-x');
    var number_movemanipulator_y = block.getFieldValue('movemanipulator-y');
    var number_movemanipulator_z = block.getFieldValue('movemanipulator-z');
    var number_movemanipulator_rx = block.getFieldValue('movemanipulator-rx');
    var number_movemanipulator_ry = block.getFieldValue('movemanipulator-ry');
    var number_movemanipulator_rz = block.getFieldValue('movemanipulator-rz');
    // TODO: Assemble JavaScript into code variable.
    var code = '<SubTree ID="MoveManipulator" x="' + number_movemanipulator_x + '" y="' + number_movemanipulator_y + '" z="' + number_movemanipulator_z + '" rx="' + number_movemanipulator_rx + '" ry="' + number_movemanipulator_ry + '" rz="' + number_movemanipulator_rz + '" />\n';
    return code;
};

xmlGenerator['grip'] = function (block) {
    var dropdown_state = block.getFieldValue('state');
    // TODO: Assemble JavaScript into code variable.
    var code = '<SubTree ID="Grip" close="' + dropdown_state + '" />\n';
    return code;
};

xmlGenerator['light'] = function (block) {
    var dropdown_color = block.getFieldValue('color');
    var text_period = block.getFieldValue('period');
    // TODO: Assemble JavaScript into code variable.
    var code = '<Light color="' + dropdown_color + '" period="' + text_period + '" />\n';
    return code;
};

xmlGenerator['voice'] = function (block) {
    var text_text = block.getFieldValue('text');
    // TODO: Assemble JavaScript into code variable.
    var code = '<Speak text="' + text_text + '" />\n';
    return code;
};

xmlGenerator['shutdown'] = function (block) {
    // TODO: Assemble JavaScript into code variable.
    var code = '<Shutdown />\n';
    return code;
};

xmlGenerator['restart'] = function (block) {
    // TODO: Assemble JavaScript into code variable.
    var code = '<Restart />\n';
    return code;
};