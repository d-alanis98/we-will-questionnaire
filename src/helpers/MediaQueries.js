export default class MediaQueries {

    static getStringRulesFromObject = (responsiveRules, breakPointKey) => {
        let rules = '';
        if(typeof responsiveRules[breakPointKey] === 'object')
            Object.entries(responsiveRules[breakPointKey]).forEach(([key, value]) => 
                rules += `${key}: ${value};\n`
            );
        else if(typeof responsiveRules[breakPointKey] === 'string')
            rules = responsiveRules[breakPointKey];
        return rules;
    }

    static getResponsiveRulesString = (responsiveRules, breakPointKey) => {
        //From object
        if(typeof responsiveRules === 'object' && responsiveRules[breakPointKey] !== undefined)
            return MediaQueries.getStringRulesFromObject(responsiveRules, breakPointKey);
        //From string
        if(typeof responsiveRules === 'string')
            return responsiveRules;
        //Other cases (not valid)
        return '';
    }

    static getMediaQueriesFromArray = (breakPoints, responsiveRules) => {
        return `
            ${
                breakPoints.map((breakPoint, index) => (`
                    ${ MediaQueries.getMediaQueriesFromString(breakPoint, responsiveRules[index]) }\n
                `)) 
            }
        `;
    }

    static getMediaQueriesFromString(breakPoint, resposiveRule) {
        return `
            @media (max-width: ${breakPoint}) {
                ${ MediaQueries.getResponsiveRulesString(resposiveRule, breakPoint) }
            }
        `;
    }

    static getMediaQueries(breakPoints, responsiveRules) {
        if(Array.isArray(breakPoints) && Array.isArray(responsiveRules))
            if(breakPoints.length === responsiveRules.length)
                return MediaQueries.getMediaQueriesFromArray(breakPoints, responsiveRules);
            else throw new Error('Breakpoints array and responsiveRules array must be have the same size');
        if(typeof breakPoints === 'string')
            return MediaQueries.getMediaQueriesFromString(breakPoints, responsiveRules);
        return '';
    }
}