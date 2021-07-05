'use strict';

class ArticModel {


    constructor(data) {

        this.title = data.title;
        this.thumbnail = data.thumbnail.lqip;
        this.rtist_name = data.rtist_titles;
        this.description = data.credit_line;






    }
}


module.exports = ArticModel;
