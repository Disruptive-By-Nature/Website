import { serviceAreas } from '../data/mockServices';
import {
  kpis, accounts, contacts, deals, tasks,
  opportunities, candidates, agents, activityData,
  jobBoardIntel, newBusinesses, parsedCv, generatedJobAd,
} from '../data/mockDashboard';

const delay = (ms = 50) => new Promise(resolve => setTimeout(resolve, ms));

export async function getServices() {
  await delay();
  return serviceAreas;
}

export async function getKpis() {
  await delay();
  return kpis;
}

export async function getAccounts() {
  await delay();
  return accounts;
}

export async function getContacts() {
  await delay();
  return contacts;
}

export async function getDeals() {
  await delay();
  return deals;
}

export async function getTasks() {
  await delay();
  return tasks;
}

export async function getOpportunities() {
  await delay();
  return opportunities;
}

export async function getCandidates() {
  await delay();
  return candidates;
}

export async function getAgents() {
  await delay();
  return agents;
}

export async function getActivityData() {
  await delay();
  return activityData;
}

export async function getJobBoardIntel() {
  await delay();
  return jobBoardIntel;
}

export async function getNewBusinesses() {
  await delay();
  return newBusinesses;
}

export async function getParsedCv() {
  await delay();
  return parsedCv;
}

export async function getGeneratedJobAd() {
  await delay();
  return generatedJobAd;
}
