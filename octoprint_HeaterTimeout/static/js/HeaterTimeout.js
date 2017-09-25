/*
 *
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */
$(function() {
    function HeaterTimeoutViewModel(parameters) {
        var self = this;
        var msgTitle = "HeaterTimeout";
        var msgType = "error";
        var autoClose = false;

        self.settingsViewModel = parameters[0];

        self.onDataUpdaterPluginMessage = function(plugin, data) {
            if (plugin != "HeaterTimeout") {
                return;
            }

            if (data.type == "popup") {
                new PNotify({
                    text: data.msg,
                    title: msgTitle,
                    type: msgType,
                    hide: autoClose
                });
            }
        }
    }

    ADDITIONAL_VIEWMODELS.push([
        HeaterTimeoutViewModel,

        // This is a list of dependencies to inject into the plugin, the order which you request
        // here is the order in which the dependencies will be injected into your view model upon
        // instantiation via the parameters argument
        [],

        // Finally, this is the list of selectors for all elements we want this view model to be bound to.
        []
    ]);
});
