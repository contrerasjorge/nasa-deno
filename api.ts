import { Router } from 'https://deno.land/x/oak@v5.0.0/mod.ts';

import * as planets from './models/planets.ts';
import * as launches from './models/launches.ts';

const router = new Router();

router.get('/', (ctx) => {
  ctx.response.body = `
    {_ {__   {__     {_ __     {__    {__     {_ __     
    {__ {__  {__    {_  {__     {__          {_  {__    
    {__  {__ {__   {__   {__      {__       {__   {__   
    {__   {_ {__  {______ {__        {__   {______ {__  
    {__    {_ __ {__       {__ {__    {__ {__       {__ 
    {__      {__{__         {__  {__ __  {__         {__
                        Mission Control API
    `;
});

router.get('/planets', (ctx) => {
  ctx.response.body = planets.getAllPlanets();
});

router.get('/launches', (ctx) => {
  ctx.response.body = launches.getAll();
});

router.get('/launches/:id', (ctx) => {
  if (ctx.params?.id) {
    const launchesList = launches.getOne(Number(ctx.params.id));
    if (launchesList) {
      ctx.response.body = launchesList;
    } else {
      ctx.throw(400, "Launches with that ID doesn't exist.");
    }
  }
});

export default router;
