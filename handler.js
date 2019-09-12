'use strict';

import sendGridEmailHelper from "./helpers/SendgridHelper";

export const hello = async (event, context) => {
  try {
    let res = await sendGridEmailHelper.sendMail();
  } catch (err) {
    console.log(err);
  }
}