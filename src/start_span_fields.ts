/*
 *  Copyright 2018 Expedia, Inc.
 *
 *       Licensed under the Apache License, Version 2.0 (the "License");
 *       you may not use this file except in compliance with the License.
 *      You may obtain a copy of the License at
 *
 *           http://www.apache.org/licenses/LICENSE-2.0
 *
 *       Unless required by applicable law or agreed to in writing, software
 *       distributed under the License is distributed on an "AS IS" BASIS,
 *       WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *       See the License for the specific language governing permissions and
 *       limitations under the License.
 */

// startSpanFields is used for type-checking the Trace.startSpan().
import SpanContext from './span_context';
import * as opentracing from 'opentracing';

export default class StartSpanFields implements opentracing.SpanOptions {
    childOf?: SpanContext;
    references?: opentracing.Reference[];
    tags?: any;
    startTime?: number;
}
