# Reference

<details><summary><code>client.<a href="/src/Client.ts">deleteTaxIdsId</a>(id, { ...params }) -> Stripe.DeletedTaxId</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Deletes an existing account or customer <code>tax_id</code> object.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.deleteTaxIdsId("id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.DeleteTaxIdsIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `StripeClient.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

##

## Account

<details><summary><code>client.account.<a href="/src/api/resources/account/client/Client.ts">retrieve</a>({ ...params }) -> Stripe.Account</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Retrieves the details of an account.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.account.retrieve();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Stripe.AccountRetrieveRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Account.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.account.<a href="/src/api/resources/account/client/Client.ts">list</a>({ ...params }) -> Stripe.AccountListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Returns a list of accounts connected to your platform via <a href="/docs/connect">Connect</a>. If you’re not a platform, the list is empty.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.account.list();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Stripe.AccountListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Account.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.account.<a href="/src/api/resources/account/client/Client.ts">create</a>({ ...params }) -> Stripe.Account</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>With <a href="/docs/connect">Connect</a>, you can create Stripe accounts for your users.
To do this, you’ll first need to <a href="https://dashboard.stripe.com/account/applications/settings">register your platform</a>.</p>

<p>If you’ve already collected information for your connected accounts, you <a href="/docs/connect/best-practices#onboarding">can prefill that information</a> when
creating the account. Connect Onboarding won’t ask for the prefilled information during account onboarding.
You can prefill any information on the account.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.account.create();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Stripe.AccountCreateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Account.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.account.<a href="/src/api/resources/account/client/Client.ts">update</a>(account, { ...params }) -> Stripe.Account</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Updates a <a href="/connect/accounts">connected account</a> by setting the values of the parameters passed. Any parameters not provided are
left unchanged.</p>

<p>For accounts where <a href="/api/accounts/object#account_object-controller-requirement_collection">controller.requirement_collection</a>
is <code>application</code>, which includes Custom accounts, you can update any information on the account.</p>

<p>For accounts where <a href="/api/accounts/object#account_object-controller-requirement_collection">controller.requirement_collection</a>
is <code>stripe</code>, which includes Standard and Express accounts, you can update all information until you create
an <a href="/api/account_links">Account Link</a> or <a href="/api/account_sessions">Account Session</a> to start Connect onboarding,
after which some properties can no longer be updated.</p>

<p>To update your own account, use the <a href="https://dashboard.stripe.com/settings/account">Dashboard</a>. Refer to our
<a href="/docs/connect/updating-accounts">Connect</a> documentation to learn more about updating accounts.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.account.update("account");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**account:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.AccountUpdateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Account.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.account.<a href="/src/api/resources/account/client/Client.ts">delete</a>(account, { ...params }) -> Stripe.DeletedAccount</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>With <a href="/connect">Connect</a>, you can delete accounts you manage.</p>

<p>Test-mode accounts can be deleted at any time.</p>

<p>Live-mode accounts where Stripe is responsible for negative account balances cannot be deleted, which includes Standard accounts. Live-mode accounts where your platform is liable for negative account balances, which includes Custom and Express accounts, can be deleted when all <a href="/api/balance/balance_object">balances</a> are zero.</p>

<p>If you want to delete your own account, use the <a href="https://dashboard.stripe.com/settings/account">account information tab in your account settings</a> instead.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.account.delete("account");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**account:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.AccountDeleteRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Account.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.account.<a href="/src/api/resources/account/client/Client.ts">reject</a>(account, { ...params }) -> Stripe.Account</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>With <a href="/connect">Connect</a>, you can reject accounts that you have flagged as suspicious.</p>

<p>Only accounts where your platform is liable for negative account balances, which includes Custom and Express accounts, can be rejected. Test-mode accounts can be rejected at any time. Live-mode accounts can only be rejected after all balances are zero.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.account.reject("account", {
    reason: "reason",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**account:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.AccountRejectRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Account.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## AccountLink

<details><summary><code>client.accountLink.<a href="/src/api/resources/accountLink/client/Client.ts">create</a>({ ...params }) -> Stripe.AccountLink</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Creates an AccountLink object that includes a single-use Stripe URL that the platform can redirect their user to in order to take them through the Connect Onboarding flow.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accountLink.create({
    account: "account",
    type: "account_onboarding",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Stripe.AccountLinkCreateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AccountLink.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## AccountSession

<details><summary><code>client.accountSession.<a href="/src/api/resources/accountSession/client/Client.ts">create</a>({ ...params }) -> Stripe.AccountSession</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Creates a AccountSession object that includes a single-use token that the platform can use on their front-end to grant client-side API access.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accountSession.create({
    account: "account",
    components: {},
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Stripe.AccountSessionCreateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AccountSession.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Capability

<details><summary><code>client.capability.<a href="/src/api/resources/capability/client/Client.ts">list</a>(account, { ...params }) -> Stripe.CapabilityListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Returns a list of capabilities associated with the account. The capabilities are returned sorted by creation date, with the most recent capability appearing first.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.capability.list("account");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**account:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.CapabilityListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Capability.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.capability.<a href="/src/api/resources/capability/client/Client.ts">retrieve</a>(account, capability, { ...params }) -> Stripe.Capability</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Retrieves information about the specified Account Capability.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.capability.retrieve("account", "capability");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**account:** `string`

</dd>
</dl>

<dl>
<dd>

**capability:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.CapabilityRetrieveRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Capability.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.capability.<a href="/src/api/resources/capability/client/Client.ts">update</a>(account, capability, { ...params }) -> Stripe.Capability</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Updates an existing Account Capability. Request or remove a capability by updating its <code>requested</code> parameter.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.capability.update("account", "capability");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**account:** `string`

</dd>
</dl>

<dl>
<dd>

**capability:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.CapabilityUpdateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Capability.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## ExternalAccount

<details><summary><code>client.externalAccount.<a href="/src/api/resources/externalAccount/client/Client.ts">list</a>(account, { ...params }) -> Stripe.ExternalAccountListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>List external accounts for an account.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.externalAccount.list("account");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**account:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.ExternalAccountListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ExternalAccount.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.externalAccount.<a href="/src/api/resources/externalAccount/client/Client.ts">create</a>(account, { ...params }) -> Stripe.ExternalAccount</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Create an external account for a given account.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.externalAccount.create("account", {
    external_account: "external_account",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**account:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.ExternalAccountCreateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ExternalAccount.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.externalAccount.<a href="/src/api/resources/externalAccount/client/Client.ts">retrieve</a>(account, id, { ...params }) -> Stripe.ExternalAccount</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Retrieve a specified external account for a given account.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.externalAccount.retrieve("account", "id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**account:** `string`

</dd>
</dl>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.ExternalAccountRetrieveRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ExternalAccount.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.externalAccount.<a href="/src/api/resources/externalAccount/client/Client.ts">update</a>(account, id, { ...params }) -> Stripe.ExternalAccount</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Updates the metadata, account holder name, account holder type of a bank account belonging to
a connected account and optionally sets it as the default for its currency. Other bank account
details are not editable by design.</p>

<p>You can only update bank accounts when <a href="/api/accounts/object#account_object-controller-requirement_collection">account.controller.requirement_collection</a> is <code>application</code>, which includes <a href="/connect/custom-accounts">Custom accounts</a>.</p>

<p>You can re-enable a disabled bank account by performing an update call without providing any
arguments or changes.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.externalAccount.update("account", "id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**account:** `string`

</dd>
</dl>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.ExternalAccountUpdateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ExternalAccount.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.externalAccount.<a href="/src/api/resources/externalAccount/client/Client.ts">delete</a>(account, id, { ...params }) -> Stripe.DeletedExternalAccount</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Delete a specified external account for a given account.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.externalAccount.delete("account", "id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**account:** `string`

</dd>
</dl>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.ExternalAccountDeleteRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ExternalAccount.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## LoginLink

<details><summary><code>client.loginLink.<a href="/src/api/resources/loginLink/client/Client.ts">create</a>(account, { ...params }) -> Stripe.LoginLink</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Creates a login link for a connected account to access the Express Dashboard.</p>

<p><strong>You can only create login links for accounts that use the <a href="/connect/express-dashboard">Express Dashboard</a> and are connected to your platform</strong>.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.loginLink.create("account");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**account:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.LoginLinkCreateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `LoginLink.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Person

<details><summary><code>client.person.<a href="/src/api/resources/person/client/Client.ts">list</a>(account, { ...params }) -> Stripe.PersonListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Returns a list of people associated with the account’s legal entity. The people are returned sorted by creation date, with the most recent people appearing first.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.person.list("account");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**account:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.PersonListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Person.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.person.<a href="/src/api/resources/person/client/Client.ts">create</a>(account, { ...params }) -> Stripe.Person</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Creates a new person.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.person.create("account");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**account:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.PersonCreateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Person.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.person.<a href="/src/api/resources/person/client/Client.ts">retrieve</a>(account, person, { ...params }) -> Stripe.Person</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Retrieves an existing person.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.person.retrieve("account", "person");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**account:** `string`

</dd>
</dl>

<dl>
<dd>

**person:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.PersonRetrieveRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Person.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.person.<a href="/src/api/resources/person/client/Client.ts">update</a>(account, person, { ...params }) -> Stripe.Person</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Updates an existing person.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.person.update("account", "person");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**account:** `string`

</dd>
</dl>

<dl>
<dd>

**person:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.PersonUpdateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Person.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.person.<a href="/src/api/resources/person/client/Client.ts">delete</a>(account, person, { ...params }) -> Stripe.DeletedPerson</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Deletes an existing person’s relationship to the account’s legal entity. Any person with a relationship for an account can be deleted through the API, except if the person is the <code>account_opener</code>. If your integration is using the <code>executive</code> parameter, you cannot delete the only verified <code>executive</code> on file.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.person.delete("account", "person");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**account:** `string`

</dd>
</dl>

<dl>
<dd>

**person:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.PersonDeleteRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Person.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## ApplePayDomain

<details><summary><code>client.applePayDomain.<a href="/src/api/resources/applePayDomain/client/Client.ts">list</a>({ ...params }) -> Stripe.ApplePayDomainListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>List apple pay domains.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.applePayDomain.list();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Stripe.ApplePayDomainListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ApplePayDomain.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.applePayDomain.<a href="/src/api/resources/applePayDomain/client/Client.ts">create</a>({ ...params }) -> Stripe.ApplePayDomain</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Create an apple pay domain.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.applePayDomain.create({
    domain_name: "domain_name",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Stripe.ApplePayDomainCreateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ApplePayDomain.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.applePayDomain.<a href="/src/api/resources/applePayDomain/client/Client.ts">retrieve</a>(domain, { ...params }) -> Stripe.ApplePayDomain</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Retrieve an apple pay domain.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.applePayDomain.retrieve("domain");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**domain:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.ApplePayDomainRetrieveRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ApplePayDomain.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.applePayDomain.<a href="/src/api/resources/applePayDomain/client/Client.ts">delete</a>(domain, { ...params }) -> Stripe.DeletedApplePayDomain</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Delete an apple pay domain.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.applePayDomain.delete("domain");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**domain:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.ApplePayDomainDeleteRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ApplePayDomain.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## ApplicationFee

<details><summary><code>client.applicationFee.<a href="/src/api/resources/applicationFee/client/Client.ts">list</a>({ ...params }) -> Stripe.ApplicationFeeListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Returns a list of application fees you’ve previously collected. The application fees are returned in sorted order, with the most recent fees appearing first.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.applicationFee.list();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Stripe.ApplicationFeeListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ApplicationFee.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.applicationFee.<a href="/src/api/resources/applicationFee/client/Client.ts">retrieve</a>(id, { ...params }) -> Stripe.ApplicationFee</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Retrieves the details of an application fee that your account has collected. The same information is returned when refunding the application fee.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.applicationFee.retrieve("id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.ApplicationFeeRetrieveRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ApplicationFee.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## FeeRefund

<details><summary><code>client.feeRefund.<a href="/src/api/resources/feeRefund/client/Client.ts">retrieve</a>(fee, id, { ...params }) -> Stripe.FeeRefund</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>By default, you can see the 10 most recent refunds stored directly on the application fee object, but you can also retrieve details about a specific refund stored on the application fee.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.feeRefund.retrieve("fee", "id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**fee:** `string`

</dd>
</dl>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.FeeRefundRetrieveRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `FeeRefund.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.feeRefund.<a href="/src/api/resources/feeRefund/client/Client.ts">update</a>(fee, id, { ...params }) -> Stripe.FeeRefund</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Updates the specified application fee refund by setting the values of the parameters passed. Any parameters not provided will be left unchanged.</p>

<p>This request only accepts metadata as an argument.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.feeRefund.update("fee", "id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**fee:** `string`

</dd>
</dl>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.FeeRefundUpdateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `FeeRefund.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.feeRefund.<a href="/src/api/resources/feeRefund/client/Client.ts">list</a>(id, { ...params }) -> Stripe.FeeRefundListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>You can see a list of the refunds belonging to a specific application fee. Note that the 10 most recent refunds are always available by default on the application fee object. If you need more than those 10, you can use this API method and the <code>limit</code> and <code>starting_after</code> parameters to page through additional refunds.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.feeRefund.list("id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.FeeRefundListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `FeeRefund.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.feeRefund.<a href="/src/api/resources/feeRefund/client/Client.ts">create</a>(id, { ...params }) -> Stripe.FeeRefund</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Refunds an application fee that has previously been collected but not yet refunded.
Funds will be refunded to the Stripe account from which the fee was originally collected.</p>

<p>You can optionally refund only part of an application fee.
You can do so multiple times, until the entire fee has been refunded.</p>

<p>Once entirely refunded, an application fee can’t be refunded again.
This method will raise an error when called on an already-refunded application fee,
or when trying to refund more money than is left on an application fee.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.feeRefund.create("id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.FeeRefundCreateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `FeeRefund.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Balance

<details><summary><code>client.balance.<a href="/src/api/resources/balance/client/Client.ts">retrieve</a>({ ...params }) -> Stripe.Balance</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Retrieves the current account balance, based on the authentication that was used to make the request.
 For a sample request, see <a href="/docs/connect/account-balances#accounting-for-negative-balances">Accounting for negative balances</a>.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.balance.retrieve();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Stripe.BalanceRetrieveRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Balance.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## BalanceTransaction

<details><summary><code>client.balanceTransaction.<a href="/src/api/resources/balanceTransaction/client/Client.ts">list</a>({ ...params }) -> Stripe.BalanceTransactionListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Returns a list of transactions that have contributed to the Stripe account balance (e.g., charges, transfers, and so forth). The transactions are returned in sorted order, with the most recent transactions appearing first.</p>

<p>Note that this endpoint was previously called “Balance history” and used the path <code>/v1/balance/history</code>.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.balanceTransaction.list();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Stripe.BalanceTransactionListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `BalanceTransaction.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.balanceTransaction.<a href="/src/api/resources/balanceTransaction/client/Client.ts">retrieve</a>(id, { ...params }) -> Stripe.BalanceTransaction</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Retrieves the balance transaction with the given ID.</p>

<p>Note that this endpoint previously used the path <code>/v1/balance/history/:id</code>.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.balanceTransaction.retrieve("id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.BalanceTransactionRetrieveRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `BalanceTransaction.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Charge

<details><summary><code>client.charge.<a href="/src/api/resources/charge/client/Client.ts">list</a>({ ...params }) -> Stripe.ChargeListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Returns a list of charges you’ve previously created. The charges are returned in sorted order, with the most recent charges appearing first.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.charge.list();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Stripe.ChargeListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Charge.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.charge.<a href="/src/api/resources/charge/client/Client.ts">create</a>({ ...params }) -> Stripe.Charge</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>This method is no longer recommended—use the <a href="/docs/api/payment_intents">Payment Intents API</a>
to initiate a new payment instead. Confirmation of the PaymentIntent creates the <code>Charge</code>
object used to request payment.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.charge.create();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Stripe.ChargeCreateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Charge.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.charge.<a href="/src/api/resources/charge/client/Client.ts">search</a>({ ...params }) -> Stripe.ChargeSearchResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Search for charges you’ve previously created using Stripe’s <a href="/docs/search#search-query-language">Search Query Language</a>.
Don’t use search in read-after-write flows where strict consistency is necessary. Under normal operating
conditions, data is searchable in less than a minute. Occasionally, propagation of new or updated data can be up
to an hour behind during outages. Search functionality is not available to merchants in India.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.charge.search({
    query: "query",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Stripe.ChargeSearchRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Charge.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.charge.<a href="/src/api/resources/charge/client/Client.ts">retrieve</a>(charge, { ...params }) -> Stripe.Charge</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Retrieves the details of a charge that has previously been created. Supply the unique charge ID that was returned from your previous request, and Stripe will return the corresponding charge information. The same information is returned when creating or refunding the charge.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.charge.retrieve("charge");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**charge:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.ChargeRetrieveRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Charge.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.charge.<a href="/src/api/resources/charge/client/Client.ts">update</a>(charge, { ...params }) -> Stripe.Charge</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Updates the specified charge by setting the values of the parameters passed. Any parameters not provided will be left unchanged.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.charge.update("charge");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**charge:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.ChargeUpdateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Charge.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.charge.<a href="/src/api/resources/charge/client/Client.ts">capture</a>(charge, { ...params }) -> Stripe.Charge</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Capture the payment of an existing, uncaptured charge that was created with the <code>capture</code> option set to false.</p>

<p>Uncaptured payments expire a set number of days after they are created (<a href="/docs/charges/placing-a-hold">7 by default</a>), after which they are marked as refunded and capture attempts will fail.</p>

<p>Don’t use this method to capture a PaymentIntent-initiated charge. Use <a href="/docs/api/payment_intents/capture">Capture a PaymentIntent</a>.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.charge.capture("charge");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**charge:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.ChargeCaptureRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Charge.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## ConfirmationToken

<details><summary><code>client.confirmationToken.<a href="/src/api/resources/confirmationToken/client/Client.ts">retrieve</a>(confirmationToken, { ...params }) -> Stripe.ConfirmationToken</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Retrieves an existing ConfirmationToken object</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.confirmationToken.retrieve("confirmation_token");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**confirmationToken:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.ConfirmationTokenRetrieveRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ConfirmationToken.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.confirmationToken.<a href="/src/api/resources/confirmationToken/client/Client.ts">create</a>({ ...params }) -> Stripe.ConfirmationToken</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Creates a test mode Confirmation Token server side for your integration tests.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.confirmationToken.create();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Stripe.ConfirmationTokenCreateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ConfirmationToken.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## CountrySpec

<details><summary><code>client.countrySpec.<a href="/src/api/resources/countrySpec/client/Client.ts">list</a>({ ...params }) -> Stripe.CountrySpecListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Lists all Country Spec objects available in the API.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.countrySpec.list();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Stripe.CountrySpecListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CountrySpec.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.countrySpec.<a href="/src/api/resources/countrySpec/client/Client.ts">retrieve</a>(country, { ...params }) -> Stripe.CountrySpec</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Returns a Country Spec for a given Country code.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.countrySpec.retrieve("country");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**country:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.CountrySpecRetrieveRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CountrySpec.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Coupon

<details><summary><code>client.coupon.<a href="/src/api/resources/coupon/client/Client.ts">list</a>({ ...params }) -> Stripe.CouponListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Returns a list of your coupons.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.coupon.list();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Stripe.CouponListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Coupon.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.coupon.<a href="/src/api/resources/coupon/client/Client.ts">create</a>({ ...params }) -> Stripe.Coupon</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>You can create coupons easily via the <a href="https://dashboard.stripe.com/coupons">coupon management</a> page of the Stripe dashboard. Coupon creation is also accessible via the API if you need to create coupons on the fly.</p>

<p>A coupon has either a <code>percent_off</code> or an <code>amount_off</code> and <code>currency</code>. If you set an <code>amount_off</code>, that amount will be subtracted from any invoice’s subtotal. For example, an invoice with a subtotal of <currency>100</currency> will have a final total of <currency>0</currency> if a coupon with an <code>amount_off</code> of <amount>200</amount> is applied to it and an invoice with a subtotal of <currency>300</currency> will have a final total of <currency>100</currency> if a coupon with an <code>amount_off</code> of <amount>200</amount> is applied to it.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.coupon.create();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Stripe.CouponCreateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Coupon.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.coupon.<a href="/src/api/resources/coupon/client/Client.ts">retrieve</a>(coupon, { ...params }) -> Stripe.Coupon</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Retrieves the coupon with the given ID.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.coupon.retrieve("coupon");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**coupon:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.CouponRetrieveRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Coupon.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.coupon.<a href="/src/api/resources/coupon/client/Client.ts">update</a>(coupon, { ...params }) -> Stripe.Coupon</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Updates the metadata of a coupon. Other coupon details (currency, duration, amount_off) are, by design, not editable.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.coupon.update("coupon");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**coupon:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.CouponUpdateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Coupon.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.coupon.<a href="/src/api/resources/coupon/client/Client.ts">delete</a>(coupon, { ...params }) -> Stripe.DeletedCoupon</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>You can delete coupons via the <a href="https://dashboard.stripe.com/coupons">coupon management</a> page of the Stripe dashboard. However, deleting a coupon does not affect any customers who have already applied the coupon; it means that new customers can’t redeem the coupon. You can also delete coupons via the API.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.coupon.delete("coupon");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**coupon:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.CouponDeleteRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Coupon.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## CreditNote

<details><summary><code>client.creditNote.<a href="/src/api/resources/creditNote/client/Client.ts">list</a>({ ...params }) -> Stripe.CreditNoteListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Returns a list of credit notes.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.creditNote.list();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Stripe.CreditNoteListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CreditNote.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.creditNote.<a href="/src/api/resources/creditNote/client/Client.ts">create</a>({ ...params }) -> Stripe.CreditNote</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Issue a credit note to adjust the amount of a finalized invoice. For a <code>status=open</code> invoice, a credit note reduces
its <code>amount_due</code>. For a <code>status=paid</code> invoice, a credit note does not affect its <code>amount_due</code>. Instead, it can result
in any combination of the following:</p>

<ul>
<li>Refund: create a new refund (using <code>refund_amount</code>) or link an existing refund (using <code>refund</code>).</li>
<li>Customer balance credit: credit the customer’s balance (using <code>credit_amount</code>) which will be automatically applied to their next invoice when it’s finalized.</li>
<li>Outside of Stripe credit: record the amount that is or will be credited outside of Stripe (using <code>out_of_band_amount</code>).</li>
</ul>

<p>For post-payment credit notes the sum of the refund, credit and outside of Stripe amounts must equal the credit note total.</p>

<p>You may issue multiple credit notes for an invoice. Each credit note will increment the invoice’s <code>pre_payment_credit_notes_amount</code>
or <code>post_payment_credit_notes_amount</code> depending on its <code>status</code> at the time of credit note creation.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.creditNote.create({
    invoice: "invoice",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Stripe.CreditNoteCreateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CreditNote.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.creditNote.<a href="/src/api/resources/creditNote/client/Client.ts">preview</a>({ ...params }) -> Stripe.CreditNote</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Get a preview of a credit note without creating it.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.creditNote.preview({
    invoice: "invoice",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Stripe.CreditNotePreviewRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CreditNote.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.creditNote.<a href="/src/api/resources/creditNote/client/Client.ts">previewLines</a>({ ...params }) -> Stripe.CreditNotePreviewLinesResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>When retrieving a credit note preview, you’ll get a <strong>lines</strong> property containing the first handful of those items. This URL you can retrieve the full (paginated) list of line items.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.creditNote.previewLines({
    invoice: "invoice",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Stripe.CreditNotePreviewLinesRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CreditNote.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.creditNote.<a href="/src/api/resources/creditNote/client/Client.ts">retrieve</a>(id, { ...params }) -> Stripe.CreditNote</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Retrieves the credit note object with the given identifier.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.creditNote.retrieve("id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.CreditNoteRetrieveRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CreditNote.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.creditNote.<a href="/src/api/resources/creditNote/client/Client.ts">update</a>(id, { ...params }) -> Stripe.CreditNote</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Updates an existing credit note.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.creditNote.update("id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.CreditNoteUpdateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CreditNote.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.creditNote.<a href="/src/api/resources/creditNote/client/Client.ts">voidCreditNote</a>(id, { ...params }) -> Stripe.CreditNote</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Marks a credit note as void. Learn more about <a href="/docs/billing/invoices/credit-notes#voiding">voiding credit notes</a>.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.creditNote.voidCreditNote("id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.CreditNoteVoidCreditNoteRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CreditNote.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## CreditNoteLineItem

<details><summary><code>client.creditNoteLineItem.<a href="/src/api/resources/creditNoteLineItem/client/Client.ts">list</a>(creditNote, { ...params }) -> Stripe.CreditNoteLineItemListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>When retrieving a credit note, you’ll get a <strong>lines</strong> property containing the first handful of those items. There is also a URL where you can retrieve the full (paginated) list of line items.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.creditNoteLineItem.list("credit_note");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**creditNote:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.CreditNoteLineItemListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CreditNoteLineItem.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## CustomerSession

<details><summary><code>client.customerSession.<a href="/src/api/resources/customerSession/client/Client.ts">create</a>({ ...params }) -> Stripe.CustomerSession</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Creates a Customer Session object that includes a single-use client secret that you can use on your front-end to grant client-side API access for certain customer resources.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.customerSession.create({
    components: {},
    customer: "customer",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Stripe.CustomerSessionCreateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CustomerSession.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Customer

<details><summary><code>client.customer.<a href="/src/api/resources/customer/client/Client.ts">list</a>({ ...params }) -> Stripe.CustomerListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Returns a list of your customers. The customers are returned sorted by creation date, with the most recent customers appearing first.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.customer.list();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Stripe.CustomerListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Customer.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.customer.<a href="/src/api/resources/customer/client/Client.ts">create</a>({ ...params }) -> Stripe.Customer</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Creates a new customer object.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.customer.create();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Stripe.CustomerCreateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Customer.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.customer.<a href="/src/api/resources/customer/client/Client.ts">search</a>({ ...params }) -> Stripe.CustomerSearchResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Search for customers you’ve previously created using Stripe’s <a href="/docs/search#search-query-language">Search Query Language</a>.
Don’t use search in read-after-write flows where strict consistency is necessary. Under normal operating
conditions, data is searchable in less than a minute. Occasionally, propagation of new or updated data can be up
to an hour behind during outages. Search functionality is not available to merchants in India.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.customer.search({
    query: "query",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Stripe.CustomerSearchRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Customer.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.customer.<a href="/src/api/resources/customer/client/Client.ts">retrieve</a>(customer, { ...params }) -> Stripe.CustomerRetrieveResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Retrieves a Customer object.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.customer.retrieve("customer");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**customer:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.CustomerRetrieveRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Customer.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.customer.<a href="/src/api/resources/customer/client/Client.ts">update</a>(customer, { ...params }) -> Stripe.Customer</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Updates the specified customer by setting the values of the parameters passed. Any parameters not provided will be left unchanged. For example, if you pass the <strong>source</strong> parameter, that becomes the customer’s active source (e.g., a card) to be used for all charges in the future. When you update a customer to a new valid card source by passing the <strong>source</strong> parameter: for each of the customer’s current subscriptions, if the subscription bills automatically and is in the <code>past_due</code> state, then the latest open invoice for the subscription with automatic collection enabled will be retried. This retry will not count as an automatic retry, and will not affect the next regularly scheduled payment for the invoice. Changing the <strong>default_source</strong> for a customer will not trigger this behavior.</p>

<p>This request accepts mostly the same arguments as the customer creation call.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.customer.update("customer");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**customer:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.CustomerUpdateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Customer.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.customer.<a href="/src/api/resources/customer/client/Client.ts">delete</a>(customer, { ...params }) -> Stripe.DeletedCustomer</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Permanently deletes a customer. It cannot be undone. Also immediately cancels any active subscriptions on the customer.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.customer.delete("customer");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**customer:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.CustomerDeleteRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Customer.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.customer.<a href="/src/api/resources/customer/client/Client.ts">deleteDiscount</a>(customer, { ...params }) -> Stripe.DeletedDiscount</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Removes the currently applied discount on a customer.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.customer.deleteDiscount("customer");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**customer:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.CustomerDeleteDiscountRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Customer.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.customer.<a href="/src/api/resources/customer/client/Client.ts">createFundingInstructions</a>(customer, { ...params }) -> Stripe.FundingInstructions</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Retrieve funding instructions for a customer cash balance. If funding instructions do not yet exist for the customer, new
funding instructions will be created. If funding instructions have already been created for a given customer, the same
funding instructions will be retrieved. In other words, we will return the same funding instructions each time.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.customer.createFundingInstructions("customer", {
    bank_transfer: {
        type: "eu_bank_transfer",
    },
    currency: "currency",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**customer:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.CustomerCreateFundingInstructionsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Customer.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.customer.<a href="/src/api/resources/customer/client/Client.ts">listPaymentMethods</a>(customer, { ...params }) -> Stripe.CustomerListPaymentMethodsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Returns a list of PaymentMethods for a given Customer</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.customer.listPaymentMethods("customer");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**customer:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.CustomerListPaymentMethodsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Customer.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.customer.<a href="/src/api/resources/customer/client/Client.ts">retrievePaymentMethod</a>(customer, paymentMethod, { ...params }) -> Stripe.PaymentMethod</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Retrieves a PaymentMethod object for a given Customer.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.customer.retrievePaymentMethod("customer", "payment_method");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**customer:** `string`

</dd>
</dl>

<dl>
<dd>

**paymentMethod:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.CustomerRetrievePaymentMethodRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Customer.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.customer.<a href="/src/api/resources/customer/client/Client.ts">fundCashBalance</a>(customer, { ...params }) -> Stripe.CustomerCashBalanceTransaction</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Create an incoming testmode bank transfer</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.customer.fundCashBalance("customer", {
    amount: 1,
    currency: "currency",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**customer:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.CustomerFundCashBalanceRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Customer.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## CustomerBalanceTransaction

<details><summary><code>client.customerBalanceTransaction.<a href="/src/api/resources/customerBalanceTransaction/client/Client.ts">list</a>(customer, { ...params }) -> Stripe.CustomerBalanceTransactionListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Returns a list of transactions that updated the customer’s <a href="/docs/billing/customer/balance">balances</a>.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.customerBalanceTransaction.list("customer");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**customer:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.CustomerBalanceTransactionListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CustomerBalanceTransaction.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.customerBalanceTransaction.<a href="/src/api/resources/customerBalanceTransaction/client/Client.ts">create</a>(customer, { ...params }) -> Stripe.CustomerBalanceTransaction</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Creates an immutable transaction that updates the customer’s credit <a href="/docs/billing/customer/balance">balance</a>.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.customerBalanceTransaction.create("customer", {
    amount: 1,
    currency: "currency",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**customer:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.CustomerBalanceTransactionCreateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CustomerBalanceTransaction.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.customerBalanceTransaction.<a href="/src/api/resources/customerBalanceTransaction/client/Client.ts">retrieve</a>(customer, transaction, { ...params }) -> Stripe.CustomerBalanceTransaction</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Retrieves a specific customer balance transaction that updated the customer’s <a href="/docs/billing/customer/balance">balances</a>.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.customerBalanceTransaction.retrieve("customer", "transaction");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**customer:** `string`

</dd>
</dl>

<dl>
<dd>

**transaction:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.CustomerBalanceTransactionRetrieveRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CustomerBalanceTransaction.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.customerBalanceTransaction.<a href="/src/api/resources/customerBalanceTransaction/client/Client.ts">update</a>(customer, transaction, { ...params }) -> Stripe.CustomerBalanceTransaction</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Most credit balance transaction fields are immutable, but you may update its <code>description</code> and <code>metadata</code>.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.customerBalanceTransaction.update("customer", "transaction");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**customer:** `string`

</dd>
</dl>

<dl>
<dd>

**transaction:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.CustomerBalanceTransactionUpdateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CustomerBalanceTransaction.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## CashBalance

<details><summary><code>client.cashBalance.<a href="/src/api/resources/cashBalance/client/Client.ts">retrieve</a>(customer, { ...params }) -> Stripe.CashBalance</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Retrieves a customer’s cash balance.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.cashBalance.retrieve("customer");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**customer:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.CashBalanceRetrieveRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CashBalance.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.cashBalance.<a href="/src/api/resources/cashBalance/client/Client.ts">update</a>(customer, { ...params }) -> Stripe.CashBalance</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Changes the settings on a customer’s cash balance.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.cashBalance.update("customer");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**customer:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.CashBalanceUpdateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CashBalance.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## CustomerCashBalanceTransaction

<details><summary><code>client.customerCashBalanceTransaction.<a href="/src/api/resources/customerCashBalanceTransaction/client/Client.ts">list</a>(customer, { ...params }) -> Stripe.CustomerCashBalanceTransactionListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Returns a list of transactions that modified the customer’s <a href="/docs/payments/customer-balance">cash balance</a>.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.customerCashBalanceTransaction.list("customer");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**customer:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.CustomerCashBalanceTransactionListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CustomerCashBalanceTransaction.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.customerCashBalanceTransaction.<a href="/src/api/resources/customerCashBalanceTransaction/client/Client.ts">retrieve</a>(customer, transaction, { ...params }) -> Stripe.CustomerCashBalanceTransaction</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Retrieves a specific cash balance transaction, which updated the customer’s <a href="/docs/payments/customer-balance">cash balance</a>.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.customerCashBalanceTransaction.retrieve("customer", "transaction");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**customer:** `string`

</dd>
</dl>

<dl>
<dd>

**transaction:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.CustomerCashBalanceTransactionRetrieveRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CustomerCashBalanceTransaction.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## PaymentSource

<details><summary><code>client.paymentSource.<a href="/src/api/resources/paymentSource/client/Client.ts">list</a>(customer, { ...params }) -> Stripe.PaymentSourceListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>List sources for a specified customer.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.paymentSource.list("customer");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**customer:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.PaymentSourceListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PaymentSource.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.paymentSource.<a href="/src/api/resources/paymentSource/client/Client.ts">create</a>(customer, { ...params }) -> Stripe.PaymentSource</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>When you create a new credit card, you must specify a customer or recipient on which to create it.</p>

<p>If the card’s owner has no default card, then the new card will become the default.
However, if the owner already has a default, then it will not change.
To change the default, you should <a href="/docs/api#update_customer">update the customer</a> to have a new <code>default_source</code>.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.paymentSource.create("customer", {
    source: "source",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**customer:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.PaymentSourceCreateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PaymentSource.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.paymentSource.<a href="/src/api/resources/paymentSource/client/Client.ts">retrieve</a>(customer, id, { ...params }) -> Stripe.PaymentSource</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Retrieve a specified source for a given customer.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.paymentSource.retrieve("customer", "id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**customer:** `string`

</dd>
</dl>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.PaymentSourceRetrieveRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PaymentSource.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Source

<details><summary><code>client.source.<a href="/src/api/resources/source/client/Client.ts">detach</a>(customer, id, { ...params }) -> Stripe.SourceDetachResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Delete a specified source for a given customer.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.source.detach("customer", "id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**customer:** `string`

</dd>
</dl>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.SourceDetachRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Source.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.source.<a href="/src/api/resources/source/client/Client.ts">create</a>({ ...params }) -> Stripe.Source</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Creates a new source object.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.source.create();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Stripe.SourceCreateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Source.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.source.<a href="/src/api/resources/source/client/Client.ts">retrieve</a>(source, { ...params }) -> Stripe.Source</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Retrieves an existing source object. Supply the unique source ID from a source creation request and Stripe will return the corresponding up-to-date source object information.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.source.retrieve("source");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**source:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.SourceRetrieveRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Source.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.source.<a href="/src/api/resources/source/client/Client.ts">update</a>(source, { ...params }) -> Stripe.Source</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Updates the specified source by setting the values of the parameters passed. Any parameters not provided will be left unchanged.</p>

<p>This request accepts the <code>metadata</code> and <code>owner</code> as arguments. It is also possible to update type specific information for selected payment methods. Please refer to our <a href="/docs/sources">payment method guides</a> for more detail.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.source.update("source");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**source:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.SourceUpdateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Source.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.source.<a href="/src/api/resources/source/client/Client.ts">sourceTransactions</a>(source, { ...params }) -> Stripe.SourceSourceTransactionsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>List source transactions for a given source.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.source.sourceTransactions("source");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**source:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.SourceSourceTransactionsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Source.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.source.<a href="/src/api/resources/source/client/Client.ts">verify</a>(source, { ...params }) -> Stripe.Source</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Verify a given source.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.source.verify("source", {
    values: ["values"],
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**source:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.SourceVerifyRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Source.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## BankAccount

<details><summary><code>client.bankAccount.<a href="/src/api/resources/bankAccount/client/Client.ts">verify</a>(customer, id, { ...params }) -> Stripe.BankAccount</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Verify a specified bank account for a given customer.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.bankAccount.verify("customer", "id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**customer:** `string`

</dd>
</dl>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.BankAccountVerifyRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `BankAccount.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## TaxId

<details><summary><code>client.taxId.<a href="/src/api/resources/taxId/client/Client.ts">list</a>(customer, { ...params }) -> Stripe.TaxIdListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Returns a list of tax IDs for a customer.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.taxId.list("customer");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**customer:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.TaxIdListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TaxId.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.taxId.<a href="/src/api/resources/taxId/client/Client.ts">create</a>(customer, { ...params }) -> Stripe.TaxId</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Creates a new <code>tax_id</code> object for a customer.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.taxId.create("customer", {
    type: "ad_nrt",
    value: "value",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**customer:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.TaxIdCreateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TaxId.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.taxId.<a href="/src/api/resources/taxId/client/Client.ts">retrieve</a>(customer, id, { ...params }) -> Stripe.TaxId</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Retrieves the <code>tax_id</code> object with the given identifier.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.taxId.retrieve("customer", "id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**customer:** `string`

</dd>
</dl>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.TaxIdRetrieveRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TaxId.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.taxId.<a href="/src/api/resources/taxId/client/Client.ts">delete</a>(customer, id, { ...params }) -> Stripe.DeletedTaxId</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Deletes an existing <code>tax_id</code> object.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.taxId.delete("customer", "id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**customer:** `string`

</dd>
</dl>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.TaxIdDeleteRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TaxId.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Dispute

<details><summary><code>client.dispute.<a href="/src/api/resources/dispute/client/Client.ts">list</a>({ ...params }) -> Stripe.DisputeListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Returns a list of your disputes.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.dispute.list();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Stripe.DisputeListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Dispute.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.dispute.<a href="/src/api/resources/dispute/client/Client.ts">retrieve</a>(dispute, { ...params }) -> Stripe.Dispute</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Retrieves the dispute with the given ID.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.dispute.retrieve("dispute");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**dispute:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.DisputeRetrieveRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Dispute.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.dispute.<a href="/src/api/resources/dispute/client/Client.ts">update</a>(dispute, { ...params }) -> Stripe.Dispute</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>When you get a dispute, contacting your customer is always the best first step. If that doesn’t work, you can submit evidence to help us resolve the dispute in your favor. You can do this in your <a href="https://dashboard.stripe.com/disputes">dashboard</a>, but if you prefer, you can use the API to submit evidence programmatically.</p>

<p>Depending on your dispute type, different evidence fields will give you a better chance of winning your dispute. To figure out which evidence fields to provide, see our <a href="/docs/disputes/categories">guide to dispute types</a>.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.dispute.update("dispute");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**dispute:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.DisputeUpdateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Dispute.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.dispute.<a href="/src/api/resources/dispute/client/Client.ts">close</a>(dispute, { ...params }) -> Stripe.Dispute</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Closing the dispute for a charge indicates that you do not have any evidence to submit and are essentially dismissing the dispute, acknowledging it as lost.</p>

<p>The status of the dispute will change from <code>needs_response</code> to <code>lost</code>. <em>Closing a dispute is irreversible</em>.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.dispute.close("dispute");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**dispute:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.DisputeCloseRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Dispute.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## EphemeralKey

<details><summary><code>client.ephemeralKey.<a href="/src/api/resources/ephemeralKey/client/Client.ts">create</a>({ ...params }) -> Stripe.EphemeralKey</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Creates a short-lived API key for a given resource.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ephemeralKey.create();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Stripe.EphemeralKeyCreateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EphemeralKey.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.ephemeralKey.<a href="/src/api/resources/ephemeralKey/client/Client.ts">delete</a>(key, { ...params }) -> Stripe.EphemeralKey</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Invalidates a short-lived API key for a given resource.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ephemeralKey.delete("key");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**key:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.EphemeralKeyDeleteRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EphemeralKey.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Event

<details><summary><code>client.event.<a href="/src/api/resources/event/client/Client.ts">list</a>({ ...params }) -> Stripe.EventListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>List events, going back up to 30 days. Each event data is rendered according to Stripe API version at its creation time, specified in <a href="https://docs.stripe.com/api/events/object">event object</a> <code>api_version</code> attribute (not according to your current Stripe API version or <code>Stripe-Version</code> header).</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.event.list();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Stripe.EventListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Event.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.event.<a href="/src/api/resources/event/client/Client.ts">retrieve</a>(id, { ...params }) -> Stripe.Event</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Retrieves the details of an event if it was created in the last 30 days. Supply the unique identifier of the event, which you might have received in a webhook.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.event.retrieve("id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.EventRetrieveRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Event.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## ExchangeRate

<details><summary><code>client.exchangeRate.<a href="/src/api/resources/exchangeRate/client/Client.ts">list</a>({ ...params }) -> Stripe.ExchangeRateListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Returns a list of objects that contain the rates at which foreign currencies are converted to one another. Only shows the currencies for which Stripe supports.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.exchangeRate.list();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Stripe.ExchangeRateListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ExchangeRate.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.exchangeRate.<a href="/src/api/resources/exchangeRate/client/Client.ts">retrieve</a>(rateId, { ...params }) -> Stripe.ExchangeRate</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Retrieves the exchange rates from the given currency to every supported currency.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.exchangeRate.retrieve("rate_id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**rateId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.ExchangeRateRetrieveRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ExchangeRate.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## FileLink

<details><summary><code>client.fileLink.<a href="/src/api/resources/fileLink/client/Client.ts">list</a>({ ...params }) -> Stripe.FileLinkListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Returns a list of file links.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.fileLink.list();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Stripe.FileLinkListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `FileLink.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.fileLink.<a href="/src/api/resources/fileLink/client/Client.ts">create</a>({ ...params }) -> Stripe.FileLink</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Creates a new file link object.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.fileLink.create({
    file: "file",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Stripe.FileLinkCreateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `FileLink.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.fileLink.<a href="/src/api/resources/fileLink/client/Client.ts">retrieve</a>(link, { ...params }) -> Stripe.FileLink</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Retrieves the file link with the given ID.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.fileLink.retrieve("link");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**link:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.FileLinkRetrieveRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `FileLink.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.fileLink.<a href="/src/api/resources/fileLink/client/Client.ts">update</a>(link, { ...params }) -> Stripe.FileLink</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Updates an existing file link object. Expired links can no longer be updated.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.fileLink.update("link");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**link:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.FileLinkUpdateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `FileLink.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## File

<details><summary><code>client.file.<a href="/src/api/resources/file/client/Client.ts">list</a>({ ...params }) -> Stripe.FileListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Returns a list of the files that your account has access to. Stripe sorts and returns the files by their creation dates, placing the most recently created files at the top.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.file.list();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Stripe.FileListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `File_.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.file.<a href="/src/api/resources/file/client/Client.ts">retrieve</a>(file, { ...params }) -> Stripe.File_</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Retrieves the details of an existing file object. After you supply a unique file ID, Stripe returns the corresponding file object. Learn how to <a href="/docs/file-upload#download-file-contents">access file contents</a>.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.file.retrieve("file");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**file:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.FileRetrieveRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `File_.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## InvoiceRenderingTemplate

<details><summary><code>client.invoiceRenderingTemplate.<a href="/src/api/resources/invoiceRenderingTemplate/client/Client.ts">list</a>({ ...params }) -> Stripe.InvoiceRenderingTemplateListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>List all templates, ordered by creation date, with the most recently created template appearing first.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.invoiceRenderingTemplate.list();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Stripe.InvoiceRenderingTemplateListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `InvoiceRenderingTemplate.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.invoiceRenderingTemplate.<a href="/src/api/resources/invoiceRenderingTemplate/client/Client.ts">retrieve</a>(template, { ...params }) -> Stripe.InvoiceRenderingTemplate</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Retrieves an invoice rendering template with the given ID. It by default returns the latest version of the template. Optionally, specify a version to see previous versions.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.invoiceRenderingTemplate.retrieve("template");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**template:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.InvoiceRenderingTemplateRetrieveRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `InvoiceRenderingTemplate.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.invoiceRenderingTemplate.<a href="/src/api/resources/invoiceRenderingTemplate/client/Client.ts">archive</a>(template, { ...params }) -> Stripe.InvoiceRenderingTemplate</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Updates the status of an invoice rendering template to ‘archived’ so no new Stripe objects (customers, invoices, etc.) can reference it. The template can also no longer be updated. However, if the template is already set on a Stripe object, it will continue to be applied on invoices generated by it.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.invoiceRenderingTemplate.archive("template");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**template:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.InvoiceRenderingTemplateArchiveRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `InvoiceRenderingTemplate.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.invoiceRenderingTemplate.<a href="/src/api/resources/invoiceRenderingTemplate/client/Client.ts">unarchive</a>(template, { ...params }) -> Stripe.InvoiceRenderingTemplate</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Unarchive an invoice rendering template so it can be used on new Stripe objects again.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.invoiceRenderingTemplate.unarchive("template");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**template:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.InvoiceRenderingTemplateUnarchiveRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `InvoiceRenderingTemplate.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Invoiceitem

<details><summary><code>client.invoiceitem.<a href="/src/api/resources/invoiceitem/client/Client.ts">list</a>({ ...params }) -> Stripe.InvoiceitemListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Returns a list of your invoice items. Invoice items are returned sorted by creation date, with the most recently created invoice items appearing first.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.invoiceitem.list();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Stripe.InvoiceitemListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Invoiceitem.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.invoiceitem.<a href="/src/api/resources/invoiceitem/client/Client.ts">create</a>({ ...params }) -> Stripe.Invoiceitem</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Creates an item to be added to a draft invoice (up to 250 items per invoice). If no invoice is specified, the item will be on the next invoice created for the customer specified.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.invoiceitem.create({
    customer: "customer",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Stripe.InvoiceitemCreateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Invoiceitem.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.invoiceitem.<a href="/src/api/resources/invoiceitem/client/Client.ts">retrieve</a>(invoiceitem, { ...params }) -> Stripe.Invoiceitem</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Retrieves the invoice item with the given ID.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.invoiceitem.retrieve("invoiceitem");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**invoiceitem:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.InvoiceitemRetrieveRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Invoiceitem.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.invoiceitem.<a href="/src/api/resources/invoiceitem/client/Client.ts">update</a>(invoiceitem, { ...params }) -> Stripe.Invoiceitem</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Updates the amount or description of an invoice item on an upcoming invoice. Updating an invoice item is only possible before the invoice it’s attached to is closed.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.invoiceitem.update("invoiceitem");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**invoiceitem:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.InvoiceitemUpdateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Invoiceitem.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.invoiceitem.<a href="/src/api/resources/invoiceitem/client/Client.ts">delete</a>(invoiceitem, { ...params }) -> Stripe.DeletedInvoiceitem</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Deletes an invoice item, removing it from an invoice. Deleting invoice items is only possible when they’re not attached to invoices, or if it’s attached to a draft invoice.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.invoiceitem.delete("invoiceitem");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**invoiceitem:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.InvoiceitemDeleteRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Invoiceitem.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Invoice

<details><summary><code>client.invoice.<a href="/src/api/resources/invoice/client/Client.ts">list</a>({ ...params }) -> Stripe.InvoiceListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>You can list all invoices, or list the invoices for a specific customer. The invoices are returned sorted by creation date, with the most recently created invoices appearing first.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.invoice.list();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Stripe.InvoiceListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Invoice.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.invoice.<a href="/src/api/resources/invoice/client/Client.ts">create</a>({ ...params }) -> Stripe.Invoice</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>This endpoint creates a draft invoice for a given customer. The invoice remains a draft until you <a href="#finalize_invoice">finalize</a> the invoice, which allows you to <a href="#pay_invoice">pay</a> or <a href="#send_invoice">send</a> the invoice to your customers.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.invoice.create();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Stripe.InvoiceCreateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Invoice.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.invoice.<a href="/src/api/resources/invoice/client/Client.ts">createPreview</a>({ ...params }) -> Stripe.Invoice</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>At any time, you can preview the upcoming invoice for a customer. This will show you all the charges that are pending, including subscription renewal charges, invoice item charges, etc. It will also show you any discounts that are applicable to the invoice.</p>

<p>Note that when you are viewing an upcoming invoice, you are simply viewing a preview – the invoice has not yet been created. As such, the upcoming invoice will not show up in invoice listing calls, and you cannot use the API to pay or edit the invoice. If you want to change the amount that your customer will be billed, you can add, remove, or update pending invoice items, or update the customer’s discount.</p>

<p>You can preview the effects of updating a subscription, including a preview of what proration will take place. To ensure that the actual proration is calculated exactly the same as the previewed proration, you should pass the <code>subscription_details.proration_date</code> parameter when doing the actual subscription update. The recommended way to get only the prorations being previewed is to consider only proration line items where <code>period[start]</code> is equal to the <code>subscription_details.proration_date</code> value passed in the request. </p>

<p>Note: Currency conversion calculations use the latest exchange rates. Exchange rates may vary between the time of the preview and the time of the actual invoice creation. <a href="https://docs.stripe.com/currencies/conversions">Learn more</a></p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.invoice.createPreview();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Stripe.InvoiceCreatePreviewRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Invoice.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.invoice.<a href="/src/api/resources/invoice/client/Client.ts">search</a>({ ...params }) -> Stripe.InvoiceSearchResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Search for invoices you’ve previously created using Stripe’s <a href="/docs/search#search-query-language">Search Query Language</a>.
Don’t use search in read-after-write flows where strict consistency is necessary. Under normal operating
conditions, data is searchable in less than a minute. Occasionally, propagation of new or updated data can be up
to an hour behind during outages. Search functionality is not available to merchants in India.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.invoice.search({
    query: "query",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Stripe.InvoiceSearchRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Invoice.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.invoice.<a href="/src/api/resources/invoice/client/Client.ts">upcoming</a>({ ...params }) -> Stripe.Invoice</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>At any time, you can preview the upcoming invoice for a customer. This will show you all the charges that are pending, including subscription renewal charges, invoice item charges, etc. It will also show you any discounts that are applicable to the invoice.</p>

<p>Note that when you are viewing an upcoming invoice, you are simply viewing a preview – the invoice has not yet been created. As such, the upcoming invoice will not show up in invoice listing calls, and you cannot use the API to pay or edit the invoice. If you want to change the amount that your customer will be billed, you can add, remove, or update pending invoice items, or update the customer’s discount.</p>

<p>You can preview the effects of updating a subscription, including a preview of what proration will take place. To ensure that the actual proration is calculated exactly the same as the previewed proration, you should pass the <code>subscription_details.proration_date</code> parameter when doing the actual subscription update. The recommended way to get only the prorations being previewed is to consider only proration line items where <code>period[start]</code> is equal to the <code>subscription_details.proration_date</code> value passed in the request.</p>

<p>Note: Currency conversion calculations use the latest exchange rates. Exchange rates may vary between the time of the preview and the time of the actual invoice creation. <a href="https://docs.stripe.com/currencies/conversions">Learn more</a></p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.invoice.upcoming();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Stripe.InvoiceUpcomingRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Invoice.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.invoice.<a href="/src/api/resources/invoice/client/Client.ts">upcomingLines</a>({ ...params }) -> Stripe.InvoiceUpcomingLinesResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>When retrieving an upcoming invoice, you’ll get a <strong>lines</strong> property containing the total count of line items and the first handful of those items. There is also a URL where you can retrieve the full (paginated) list of line items.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.invoice.upcomingLines();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Stripe.InvoiceUpcomingLinesRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Invoice.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.invoice.<a href="/src/api/resources/invoice/client/Client.ts">retrieve</a>(invoice, { ...params }) -> Stripe.Invoice</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Retrieves the invoice with the given ID.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.invoice.retrieve("invoice");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**invoice:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.InvoiceRetrieveRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Invoice.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.invoice.<a href="/src/api/resources/invoice/client/Client.ts">update</a>(invoice, { ...params }) -> Stripe.Invoice</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Draft invoices are fully editable. Once an invoice is <a href="/docs/billing/invoices/workflow#finalized">finalized</a>,
monetary values, as well as <code>collection_method</code>, become uneditable.</p>

<p>If you would like to stop the Stripe Billing engine from automatically finalizing, reattempting payments on,
sending reminders for, or <a href="/docs/billing/invoices/reconciliation">automatically reconciling</a> invoices, pass
<code>auto_advance=false</code>.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.invoice.update("invoice");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**invoice:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.InvoiceUpdateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Invoice.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.invoice.<a href="/src/api/resources/invoice/client/Client.ts">delete</a>(invoice, { ...params }) -> Stripe.DeletedInvoice</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Permanently deletes a one-off invoice draft. This cannot be undone. Attempts to delete invoices that are no longer in a draft state will fail; once an invoice has been finalized or if an invoice is for a subscription, it must be <a href="#void_invoice">voided</a>.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.invoice.delete("invoice");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**invoice:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.InvoiceDeleteRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Invoice.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.invoice.<a href="/src/api/resources/invoice/client/Client.ts">addLines</a>(invoice, { ...params }) -> Stripe.Invoice</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Adds multiple line items to an invoice. This is only possible when an invoice is still a draft.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.invoice.addLines("invoice", {
    lines: [{}],
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**invoice:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.InvoiceAddLinesRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Invoice.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.invoice.<a href="/src/api/resources/invoice/client/Client.ts">finalizeInvoice</a>(invoice, { ...params }) -> Stripe.Invoice</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Stripe automatically finalizes drafts before sending and attempting payment on invoices. However, if you’d like to finalize a draft invoice manually, you can do so using this method.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.invoice.finalizeInvoice("invoice");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**invoice:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.InvoiceFinalizeInvoiceRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Invoice.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.invoice.<a href="/src/api/resources/invoice/client/Client.ts">markUncollectible</a>(invoice, { ...params }) -> Stripe.Invoice</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Marking an invoice as uncollectible is useful for keeping track of bad debts that can be written off for accounting purposes.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.invoice.markUncollectible("invoice");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**invoice:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.InvoiceMarkUncollectibleRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Invoice.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.invoice.<a href="/src/api/resources/invoice/client/Client.ts">pay</a>(invoice, { ...params }) -> Stripe.Invoice</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Stripe automatically creates and then attempts to collect payment on invoices for customers on subscriptions according to your <a href="https://dashboard.stripe.com/account/billing/automatic">subscriptions settings</a>. However, if you’d like to attempt payment on an invoice out of the normal collection schedule or for some other reason, you can do so.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.invoice.pay("invoice");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**invoice:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.InvoicePayRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Invoice.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.invoice.<a href="/src/api/resources/invoice/client/Client.ts">removeLines</a>(invoice, { ...params }) -> Stripe.Invoice</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Removes multiple line items from an invoice. This is only possible when an invoice is still a draft.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.invoice.removeLines("invoice", {
    lines: [
        {
            behavior: "delete",
            id: "id",
        },
    ],
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**invoice:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.InvoiceRemoveLinesRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Invoice.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.invoice.<a href="/src/api/resources/invoice/client/Client.ts">sendInvoice</a>(invoice, { ...params }) -> Stripe.Invoice</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Stripe will automatically send invoices to customers according to your <a href="https://dashboard.stripe.com/account/billing/automatic">subscriptions settings</a>. However, if you’d like to manually send an invoice to your customer out of the normal schedule, you can do so. When sending invoices that have already been paid, there will be no reference to the payment in the email.</p>

<p>Requests made in test-mode result in no emails being sent, despite sending an <code>invoice.sent</code> event.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.invoice.sendInvoice("invoice");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**invoice:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.InvoiceSendInvoiceRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Invoice.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.invoice.<a href="/src/api/resources/invoice/client/Client.ts">updateLines</a>(invoice, { ...params }) -> Stripe.Invoice</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Updates multiple line items on an invoice. This is only possible when an invoice is still a draft.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.invoice.updateLines("invoice", {
    lines: [
        {
            id: "id",
        },
    ],
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**invoice:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.InvoiceUpdateLinesRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Invoice.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.invoice.<a href="/src/api/resources/invoice/client/Client.ts">voidInvoice</a>(invoice, { ...params }) -> Stripe.Invoice</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Mark a finalized invoice as void. This cannot be undone. Voiding an invoice is similar to <a href="#delete_invoice">deletion</a>, however it only applies to finalized invoices and maintains a papertrail where the invoice can still be found.</p>

<p>Consult with local regulations to determine whether and how an invoice might be amended, canceled, or voided in the jurisdiction you’re doing business in. You might need to <a href="#create_invoice">issue another invoice</a> or <a href="#create_credit_note">credit note</a> instead. Stripe recommends that you consult with your legal counsel for advice specific to your business.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.invoice.voidInvoice("invoice");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**invoice:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.InvoiceVoidInvoiceRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Invoice.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## LineItem

<details><summary><code>client.lineItem.<a href="/src/api/resources/lineItem/client/Client.ts">list</a>(invoice, { ...params }) -> Stripe.LineItemListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>When retrieving an invoice, you’ll get a <strong>lines</strong> property containing the total count of line items and the first handful of those items. There is also a URL where you can retrieve the full (paginated) list of line items.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.lineItem.list("invoice");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**invoice:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.LineItemListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `LineItem.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.lineItem.<a href="/src/api/resources/lineItem/client/Client.ts">update</a>(invoice, lineItemId, { ...params }) -> Stripe.LineItem</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Updates an invoice’s line item. Some fields, such as <code>tax_amounts</code>, only live on the invoice line item,
so they can only be updated through this endpoint. Other fields, such as <code>amount</code>, live on both the invoice
item and the invoice line item, so updates on this endpoint will propagate to the invoice item as well.
Updating an invoice’s line item is only possible before the invoice is finalized.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.lineItem.update("invoice", "line_item_id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**invoice:** `string` — Invoice ID of line item

</dd>
</dl>

<dl>
<dd>

**lineItemId:** `string` — Invoice line item ID

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.LineItemUpdateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `LineItem.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Mandate

<details><summary><code>client.mandate.<a href="/src/api/resources/mandate/client/Client.ts">retrieve</a>(mandate, { ...params }) -> Stripe.Mandate</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Retrieves a Mandate object.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.mandate.retrieve("mandate");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**mandate:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.MandateRetrieveRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Mandate.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## PaymentIntent

<details><summary><code>client.paymentIntent.<a href="/src/api/resources/paymentIntent/client/Client.ts">list</a>({ ...params }) -> Stripe.PaymentIntentListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Returns a list of PaymentIntents.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.paymentIntent.list();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Stripe.PaymentIntentListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PaymentIntent.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.paymentIntent.<a href="/src/api/resources/paymentIntent/client/Client.ts">create</a>({ ...params }) -> Stripe.PaymentIntent</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Creates a PaymentIntent object.</p>

<p>After the PaymentIntent is created, attach a payment method and <a href="/docs/api/payment_intents/confirm">confirm</a>
to continue the payment. Learn more about <a href="/docs/payments/payment-intents">the available payment flows
with the Payment Intents API</a>.</p>

<p>When you use <code>confirm=true</code> during creation, it’s equivalent to creating
and confirming the PaymentIntent in the same call. You can use any parameters
available in the <a href="/docs/api/payment_intents/confirm">confirm API</a> when you supply
<code>confirm=true</code>.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.paymentIntent.create({
    amount: 1,
    currency: "currency",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Stripe.PaymentIntentCreateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PaymentIntent.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.paymentIntent.<a href="/src/api/resources/paymentIntent/client/Client.ts">search</a>({ ...params }) -> Stripe.PaymentIntentSearchResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Search for PaymentIntents you’ve previously created using Stripe’s <a href="/docs/search#search-query-language">Search Query Language</a>.
Don’t use search in read-after-write flows where strict consistency is necessary. Under normal operating
conditions, data is searchable in less than a minute. Occasionally, propagation of new or updated data can be up
to an hour behind during outages. Search functionality is not available to merchants in India.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.paymentIntent.search({
    query: "query",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Stripe.PaymentIntentSearchRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PaymentIntent.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.paymentIntent.<a href="/src/api/resources/paymentIntent/client/Client.ts">retrieve</a>(intent, { ...params }) -> Stripe.PaymentIntent</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Retrieves the details of a PaymentIntent that has previously been created. </p>

<p>You can retrieve a PaymentIntent client-side using a publishable key when the <code>client_secret</code> is in the query string. </p>

<p>If you retrieve a PaymentIntent with a publishable key, it only returns a subset of properties. Refer to the <a href="#payment_intent_object">payment intent</a> object reference for more details.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.paymentIntent.retrieve("intent");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**intent:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.PaymentIntentRetrieveRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PaymentIntent.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.paymentIntent.<a href="/src/api/resources/paymentIntent/client/Client.ts">update</a>(intent, { ...params }) -> Stripe.PaymentIntent</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Updates properties on a PaymentIntent object without confirming.</p>

<p>Depending on which properties you update, you might need to confirm the
PaymentIntent again. For example, updating the <code>payment_method</code>
always requires you to confirm the PaymentIntent again. If you prefer to
update and confirm at the same time, we recommend updating properties through
the <a href="/docs/api/payment_intents/confirm">confirm API</a> instead.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.paymentIntent.update("intent");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**intent:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.PaymentIntentUpdateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PaymentIntent.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.paymentIntent.<a href="/src/api/resources/paymentIntent/client/Client.ts">applyCustomerBalance</a>(intent, { ...params }) -> Stripe.PaymentIntent</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Manually reconcile the remaining amount for a <code>customer_balance</code> PaymentIntent.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.paymentIntent.applyCustomerBalance("intent");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**intent:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.PaymentIntentApplyCustomerBalanceRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PaymentIntent.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.paymentIntent.<a href="/src/api/resources/paymentIntent/client/Client.ts">cancel</a>(intent, { ...params }) -> Stripe.PaymentIntent</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>You can cancel a PaymentIntent object when it’s in one of these statuses: <code>requires_payment_method</code>, <code>requires_capture</code>, <code>requires_confirmation</code>, <code>requires_action</code> or, <a href="/docs/payments/intents">in rare cases</a>, <code>processing</code>. </p>

<p>After it’s canceled, no additional charges are made by the PaymentIntent and any operations on the PaymentIntent fail with an error. For PaymentIntents with a <code>status</code> of <code>requires_capture</code>, the remaining <code>amount_capturable</code> is automatically refunded. </p>

<p>You can’t cancel the PaymentIntent for a Checkout Session. <a href="/docs/api/checkout/sessions/expire">Expire the Checkout Session</a> instead.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.paymentIntent.cancel("intent");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**intent:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.PaymentIntentCancelRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PaymentIntent.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.paymentIntent.<a href="/src/api/resources/paymentIntent/client/Client.ts">capture</a>(intent, { ...params }) -> Stripe.PaymentIntent</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Capture the funds of an existing uncaptured PaymentIntent when its status is <code>requires_capture</code>.</p>

<p>Uncaptured PaymentIntents are cancelled a set number of days (7 by default) after their creation.</p>

<p>Learn more about <a href="/docs/payments/capture-later">separate authorization and capture</a>.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.paymentIntent.capture("intent");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**intent:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.PaymentIntentCaptureRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PaymentIntent.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.paymentIntent.<a href="/src/api/resources/paymentIntent/client/Client.ts">confirm</a>(intent, { ...params }) -> Stripe.PaymentIntent</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Confirm that your customer intends to pay with current or provided
payment method. Upon confirmation, the PaymentIntent will attempt to initiate
a payment.
If the selected payment method requires additional authentication steps, the
PaymentIntent will transition to the <code>requires_action</code> status and
suggest additional actions via <code>next_action</code>. If payment fails,
the PaymentIntent transitions to the <code>requires_payment_method</code> status or the
<code>canceled</code> status if the confirmation limit is reached. If
payment succeeds, the PaymentIntent will transition to the <code>succeeded</code>
status (or <code>requires_capture</code>, if <code>capture_method</code> is set to <code>manual</code>).
If the <code>confirmation_method</code> is <code>automatic</code>, payment may be attempted
using our <a href="/docs/stripe-js/reference#stripe-handle-card-payment">client SDKs</a>
and the PaymentIntent’s <a href="#payment_intent_object-client_secret">client_secret</a>.
After <code>next_action</code>s are handled by the client, no additional
confirmation is required to complete the payment.
If the <code>confirmation_method</code> is <code>manual</code>, all payment attempts must be
initiated using a secret key.
If any actions are required for the payment, the PaymentIntent will
return to the <code>requires_confirmation</code> state
after those actions are completed. Your server needs to then
explicitly re-confirm the PaymentIntent to initiate the next payment
attempt.
There is a variable upper limit on how many times a PaymentIntent can be confirmed.
After this limit is reached, any further calls to this endpoint will
transition the PaymentIntent to the <code>canceled</code> state.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.paymentIntent.confirm("intent");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**intent:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.PaymentIntentConfirmRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PaymentIntent.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.paymentIntent.<a href="/src/api/resources/paymentIntent/client/Client.ts">incrementAuthorization</a>(intent, { ...params }) -> Stripe.PaymentIntent</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Perform an incremental authorization on an eligible
<a href="/docs/api/payment_intents/object">PaymentIntent</a>. To be eligible, the
PaymentIntent’s status must be <code>requires_capture</code> and
<a href="/docs/api/charges/object#charge_object-payment_method_details-card_present-incremental_authorization_supported">incremental_authorization_supported</a>
must be <code>true</code>.</p>

<p>Incremental authorizations attempt to increase the authorized amount on
your customer’s card to the new, higher <code>amount</code> provided. Similar to the
initial authorization, incremental authorizations can be declined. A
single PaymentIntent can call this endpoint multiple times to further
increase the authorized amount.</p>

<p>If the incremental authorization succeeds, the PaymentIntent object
returns with the updated
<a href="/docs/api/payment_intents/object#payment_intent_object-amount">amount</a>.
If the incremental authorization fails, a
<a href="/docs/error-codes#card-declined">card_declined</a> error returns, and no other
fields on the PaymentIntent or Charge update. The PaymentIntent
object remains capturable for the previously authorized amount.</p>

<p>Each PaymentIntent can have a maximum of 10 incremental authorization attempts, including declines.
After it’s captured, a PaymentIntent can no longer be incremented.</p>

<p>Learn more about <a href="/docs/terminal/features/incremental-authorizations">incremental authorizations</a>.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.paymentIntent.incrementAuthorization("intent", {
    amount: 1,
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**intent:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.PaymentIntentIncrementAuthorizationRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PaymentIntent.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.paymentIntent.<a href="/src/api/resources/paymentIntent/client/Client.ts">verifyMicrodeposits</a>(intent, { ...params }) -> Stripe.PaymentIntent</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Verifies microdeposits on a PaymentIntent object.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.paymentIntent.verifyMicrodeposits("intent");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**intent:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.PaymentIntentVerifyMicrodepositsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PaymentIntent.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## PaymentLink

<details><summary><code>client.paymentLink.<a href="/src/api/resources/paymentLink/client/Client.ts">list</a>({ ...params }) -> Stripe.PaymentLinkListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Returns a list of your payment links.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.paymentLink.list();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Stripe.PaymentLinkListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PaymentLink.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.paymentLink.<a href="/src/api/resources/paymentLink/client/Client.ts">create</a>({ ...params }) -> Stripe.PaymentLink</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Creates a payment link.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.paymentLink.create({
    line_items: [
        {
            price: "price",
            quantity: 1,
        },
    ],
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Stripe.PaymentLinkCreateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PaymentLink.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.paymentLink.<a href="/src/api/resources/paymentLink/client/Client.ts">retrieve</a>(paymentLink, { ...params }) -> Stripe.PaymentLink</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Retrieve a payment link.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.paymentLink.retrieve("payment_link");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**paymentLink:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.PaymentLinkRetrieveRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PaymentLink.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.paymentLink.<a href="/src/api/resources/paymentLink/client/Client.ts">update</a>(paymentLink, { ...params }) -> Stripe.PaymentLink</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Updates a payment link.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.paymentLink.update("payment_link");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**paymentLink:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.PaymentLinkUpdateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PaymentLink.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.paymentLink.<a href="/src/api/resources/paymentLink/client/Client.ts">listLineItems</a>(paymentLink, { ...params }) -> Stripe.PaymentLinkListLineItemsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>When retrieving a payment link, there is an includable <strong>line_items</strong> property containing the first handful of those items. There is also a URL where you can retrieve the full (paginated) list of line items.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.paymentLink.listLineItems("payment_link");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**paymentLink:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.PaymentLinkListLineItemsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PaymentLink.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## PaymentMethodConfiguration

<details><summary><code>client.paymentMethodConfiguration.<a href="/src/api/resources/paymentMethodConfiguration/client/Client.ts">list</a>({ ...params }) -> Stripe.PaymentMethodConfigurationListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>List payment method configurations</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.paymentMethodConfiguration.list();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Stripe.PaymentMethodConfigurationListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PaymentMethodConfiguration.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.paymentMethodConfiguration.<a href="/src/api/resources/paymentMethodConfiguration/client/Client.ts">create</a>({ ...params }) -> Stripe.PaymentMethodConfiguration</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Creates a payment method configuration</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.paymentMethodConfiguration.create();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Stripe.PaymentMethodConfigurationCreateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PaymentMethodConfiguration.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.paymentMethodConfiguration.<a href="/src/api/resources/paymentMethodConfiguration/client/Client.ts">retrieve</a>(configuration, { ...params }) -> Stripe.PaymentMethodConfiguration</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Retrieve payment method configuration</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.paymentMethodConfiguration.retrieve("configuration");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**configuration:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.PaymentMethodConfigurationRetrieveRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PaymentMethodConfiguration.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.paymentMethodConfiguration.<a href="/src/api/resources/paymentMethodConfiguration/client/Client.ts">update</a>(configuration, { ...params }) -> Stripe.PaymentMethodConfiguration</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Update payment method configuration</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.paymentMethodConfiguration.update("configuration");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**configuration:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.PaymentMethodConfigurationUpdateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PaymentMethodConfiguration.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## PaymentMethodDomain

<details><summary><code>client.paymentMethodDomain.<a href="/src/api/resources/paymentMethodDomain/client/Client.ts">list</a>({ ...params }) -> Stripe.PaymentMethodDomainListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Lists the details of existing payment method domains.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.paymentMethodDomain.list();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Stripe.PaymentMethodDomainListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PaymentMethodDomain.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.paymentMethodDomain.<a href="/src/api/resources/paymentMethodDomain/client/Client.ts">create</a>({ ...params }) -> Stripe.PaymentMethodDomain</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Creates a payment method domain.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.paymentMethodDomain.create({
    domain_name: "domain_name",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Stripe.PaymentMethodDomainCreateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PaymentMethodDomain.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.paymentMethodDomain.<a href="/src/api/resources/paymentMethodDomain/client/Client.ts">retrieve</a>(paymentMethodDomain, { ...params }) -> Stripe.PaymentMethodDomain</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Retrieves the details of an existing payment method domain.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.paymentMethodDomain.retrieve("payment_method_domain");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**paymentMethodDomain:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.PaymentMethodDomainRetrieveRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PaymentMethodDomain.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.paymentMethodDomain.<a href="/src/api/resources/paymentMethodDomain/client/Client.ts">update</a>(paymentMethodDomain, { ...params }) -> Stripe.PaymentMethodDomain</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Updates an existing payment method domain.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.paymentMethodDomain.update("payment_method_domain");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**paymentMethodDomain:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.PaymentMethodDomainUpdateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PaymentMethodDomain.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.paymentMethodDomain.<a href="/src/api/resources/paymentMethodDomain/client/Client.ts">validate</a>(paymentMethodDomain, { ...params }) -> Stripe.PaymentMethodDomain</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Some payment methods such as Apple Pay require additional steps to verify a domain. If the requirements weren’t satisfied when the domain was created, the payment method will be inactive on the domain.
The payment method doesn’t appear in Elements for this domain until it is active.</p>

<p>To activate a payment method on an existing payment method domain, complete the required validation steps specific to the payment method, and then validate the payment method domain with this endpoint.</p>

<p>Related guides: <a href="/docs/payments/payment-methods/pmd-registration">Payment method domains</a>.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.paymentMethodDomain.validate("payment_method_domain");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**paymentMethodDomain:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.PaymentMethodDomainValidateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PaymentMethodDomain.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## PaymentMethod

<details><summary><code>client.paymentMethod.<a href="/src/api/resources/paymentMethod/client/Client.ts">list</a>({ ...params }) -> Stripe.PaymentMethodListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Returns a list of PaymentMethods for Treasury flows. If you want to list the PaymentMethods attached to a Customer for payments, you should use the <a href="/docs/api/payment_methods/customer_list">List a Customer’s PaymentMethods</a> API instead.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.paymentMethod.list();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Stripe.PaymentMethodListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PaymentMethod.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.paymentMethod.<a href="/src/api/resources/paymentMethod/client/Client.ts">create</a>({ ...params }) -> Stripe.PaymentMethod</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Creates a PaymentMethod object. Read the <a href="/docs/stripe-js/reference#stripe-create-payment-method">Stripe.js reference</a> to learn how to create PaymentMethods via Stripe.js.</p>

<p>Instead of creating a PaymentMethod directly, we recommend using the <a href="/docs/payments/accept-a-payment">PaymentIntents</a> API to accept a payment immediately or the <a href="/docs/payments/save-and-reuse">SetupIntent</a> API to collect payment method details ahead of a future payment.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.paymentMethod.create();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Stripe.PaymentMethodCreateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PaymentMethod.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.paymentMethod.<a href="/src/api/resources/paymentMethod/client/Client.ts">retrieve</a>(paymentMethod, { ...params }) -> Stripe.PaymentMethod</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Retrieves a PaymentMethod object attached to the StripeAccount. To retrieve a payment method attached to a Customer, you should use <a href="/docs/api/payment_methods/customer">Retrieve a Customer’s PaymentMethods</a></p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.paymentMethod.retrieve("payment_method");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**paymentMethod:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.PaymentMethodRetrieveRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PaymentMethod.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.paymentMethod.<a href="/src/api/resources/paymentMethod/client/Client.ts">update</a>(paymentMethod, { ...params }) -> Stripe.PaymentMethod</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Updates a PaymentMethod object. A PaymentMethod must be attached a customer to be updated.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.paymentMethod.update("payment_method");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**paymentMethod:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.PaymentMethodUpdateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PaymentMethod.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.paymentMethod.<a href="/src/api/resources/paymentMethod/client/Client.ts">attach</a>(paymentMethod, { ...params }) -> Stripe.PaymentMethod</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Attaches a PaymentMethod object to a Customer.</p>

<p>To attach a new PaymentMethod to a customer for future payments, we recommend you use a <a href="/docs/api/setup_intents">SetupIntent</a>
or a PaymentIntent with <a href="/docs/api/payment_intents/create#create_payment_intent-setup_future_usage">setup_future_usage</a>.
These approaches will perform any necessary steps to set up the PaymentMethod for future payments. Using the <code>/v1/payment_methods/:id/attach</code>
endpoint without first using a SetupIntent or PaymentIntent with <code>setup_future_usage</code> does not optimize the PaymentMethod for
future use, which makes later declines and payment friction more likely.
See <a href="/docs/payments/payment-intents#future-usage">Optimizing cards for future payments</a> for more information about setting up
future payments.</p>

<p>To use this PaymentMethod as the default for invoice or subscription payments,
set <a href="/docs/api/customers/update#update_customer-invoice_settings-default_payment_method"><code>invoice_settings.default_payment_method</code></a>,
on the Customer to the PaymentMethod’s ID.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.paymentMethod.attach("payment_method", {
    customer: "customer",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**paymentMethod:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.PaymentMethodAttachRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PaymentMethod.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.paymentMethod.<a href="/src/api/resources/paymentMethod/client/Client.ts">detach</a>(paymentMethod, { ...params }) -> Stripe.PaymentMethod</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Detaches a PaymentMethod object from a Customer. After a PaymentMethod is detached, it can no longer be used for a payment or re-attached to a Customer.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.paymentMethod.detach("payment_method");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**paymentMethod:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.PaymentMethodDetachRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PaymentMethod.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Payout

<details><summary><code>client.payout.<a href="/src/api/resources/payout/client/Client.ts">list</a>({ ...params }) -> Stripe.PayoutListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Returns a list of existing payouts sent to third-party bank accounts or payouts that Stripe sent to you. The payouts return in sorted order, with the most recently created payouts appearing first.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.payout.list();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Stripe.PayoutListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Payout.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.payout.<a href="/src/api/resources/payout/client/Client.ts">create</a>({ ...params }) -> Stripe.Payout</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>To send funds to your own bank account, create a new payout object. Your <a href="#balance">Stripe balance</a> must cover the payout amount. If it doesn’t, you receive an “Insufficient Funds” error.</p>

<p>If your API key is in test mode, money won’t actually be sent, though every other action occurs as if you’re in live mode.</p>

<p>If you create a manual payout on a Stripe account that uses multiple payment source types, you need to specify the source type balance that the payout draws from. The <a href="#balance_object">balance object</a> details available and pending amounts by source type.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.payout.create({
    amount: 1,
    currency: "currency",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Stripe.PayoutCreateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Payout.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.payout.<a href="/src/api/resources/payout/client/Client.ts">retrieve</a>(payout, { ...params }) -> Stripe.Payout</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Retrieves the details of an existing payout. Supply the unique payout ID from either a payout creation request or the payout list. Stripe returns the corresponding payout information.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.payout.retrieve("payout");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**payout:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.PayoutRetrieveRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Payout.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.payout.<a href="/src/api/resources/payout/client/Client.ts">update</a>(payout, { ...params }) -> Stripe.Payout</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Updates the specified payout by setting the values of the parameters you pass. We don’t change parameters that you don’t provide. This request only accepts the metadata as arguments.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.payout.update("payout");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**payout:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.PayoutUpdateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Payout.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.payout.<a href="/src/api/resources/payout/client/Client.ts">cancel</a>(payout, { ...params }) -> Stripe.Payout</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>You can cancel a previously created payout if its status is <code>pending</code>. Stripe refunds the funds to your available balance. You can’t cancel automatic Stripe payouts.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.payout.cancel("payout");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**payout:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.PayoutCancelRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Payout.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.payout.<a href="/src/api/resources/payout/client/Client.ts">reverse</a>(payout, { ...params }) -> Stripe.Payout</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Reverses a payout by debiting the destination bank account. At this time, you can only reverse payouts for connected accounts to US bank accounts. If the payout is manual and in the <code>pending</code> status, use <code>/v1/payouts/:id/cancel</code> instead.</p>

<p>By requesting a reversal through <code>/v1/payouts/:id/reverse</code>, you confirm that the authorized signatory of the selected bank account authorizes the debit on the bank account and that no other authorization is required.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.payout.reverse("payout");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**payout:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.PayoutReverseRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Payout.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Plan

<details><summary><code>client.plan.<a href="/src/api/resources/plan/client/Client.ts">list</a>({ ...params }) -> Stripe.PlanListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Returns a list of your plans.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.plan.list();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Stripe.PlanListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Plan.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.plan.<a href="/src/api/resources/plan/client/Client.ts">create</a>({ ...params }) -> Stripe.Plan</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>You can now model subscriptions more flexibly using the <a href="#prices">Prices API</a>. It replaces the Plans API and is backwards compatible to simplify your migration.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.plan.create({
    currency: "currency",
    interval: "day",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Stripe.PlanCreateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Plan.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.plan.<a href="/src/api/resources/plan/client/Client.ts">retrieve</a>(plan, { ...params }) -> Stripe.Plan</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Retrieves the plan with the given ID.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.plan.retrieve("plan");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**plan:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.PlanRetrieveRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Plan.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.plan.<a href="/src/api/resources/plan/client/Client.ts">update</a>(plan, { ...params }) -> Stripe.Plan</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Updates the specified plan by setting the values of the parameters passed. Any parameters not provided are left unchanged. By design, you cannot change a plan’s ID, amount, currency, or billing cycle.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.plan.update("plan");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**plan:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.PlanUpdateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Plan.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.plan.<a href="/src/api/resources/plan/client/Client.ts">delete</a>(plan, { ...params }) -> Stripe.DeletedPlan</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Deleting plans means new subscribers can’t be added. Existing subscribers aren’t affected.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.plan.delete("plan");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**plan:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.PlanDeleteRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Plan.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Price

<details><summary><code>client.price.<a href="/src/api/resources/price/client/Client.ts">list</a>({ ...params }) -> Stripe.PriceListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Returns a list of your active prices, excluding <a href="/docs/products-prices/pricing-models#inline-pricing">inline prices</a>. For the list of inactive prices, set <code>active</code> to false.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.price.list();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Stripe.PriceListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Price.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.price.<a href="/src/api/resources/price/client/Client.ts">create</a>({ ...params }) -> Stripe.Price</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Creates a new price for an existing product. The price can be recurring or one-time.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.price.create({
    currency: "currency",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Stripe.PriceCreateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Price.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.price.<a href="/src/api/resources/price/client/Client.ts">search</a>({ ...params }) -> Stripe.PriceSearchResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Search for prices you’ve previously created using Stripe’s <a href="/docs/search#search-query-language">Search Query Language</a>.
Don’t use search in read-after-write flows where strict consistency is necessary. Under normal operating
conditions, data is searchable in less than a minute. Occasionally, propagation of new or updated data can be up
to an hour behind during outages. Search functionality is not available to merchants in India.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.price.search({
    query: "query",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Stripe.PriceSearchRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Price.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.price.<a href="/src/api/resources/price/client/Client.ts">retrieve</a>(price, { ...params }) -> Stripe.Price</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Retrieves the price with the given ID.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.price.retrieve("price");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**price:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.PriceRetrieveRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Price.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.price.<a href="/src/api/resources/price/client/Client.ts">update</a>(price, { ...params }) -> Stripe.Price</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Updates the specified price by setting the values of the parameters passed. Any parameters not provided are left unchanged.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.price.update("price");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**price:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.PriceUpdateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Price.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Product

<details><summary><code>client.product.<a href="/src/api/resources/product/client/Client.ts">list</a>({ ...params }) -> Stripe.ProductListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Returns a list of your products. The products are returned sorted by creation date, with the most recently created products appearing first.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.product.list();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Stripe.ProductListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Product.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.product.<a href="/src/api/resources/product/client/Client.ts">create</a>({ ...params }) -> Stripe.Product</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Creates a new product object.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.product.create({
    name: "name",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Stripe.ProductCreateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Product.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.product.<a href="/src/api/resources/product/client/Client.ts">search</a>({ ...params }) -> Stripe.ProductSearchResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Search for products you’ve previously created using Stripe’s <a href="/docs/search#search-query-language">Search Query Language</a>.
Don’t use search in read-after-write flows where strict consistency is necessary. Under normal operating
conditions, data is searchable in less than a minute. Occasionally, propagation of new or updated data can be up
to an hour behind during outages. Search functionality is not available to merchants in India.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.product.search({
    query: "query",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Stripe.ProductSearchRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Product.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.product.<a href="/src/api/resources/product/client/Client.ts">retrieve</a>(id, { ...params }) -> Stripe.Product</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Retrieves the details of an existing product. Supply the unique product ID from either a product creation request or the product list, and Stripe will return the corresponding product information.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.product.retrieve("id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.ProductRetrieveRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Product.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.product.<a href="/src/api/resources/product/client/Client.ts">update</a>(id, { ...params }) -> Stripe.Product</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Updates the specific product by setting the values of the parameters passed. Any parameters not provided will be left unchanged.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.product.update("id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.ProductUpdateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Product.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.product.<a href="/src/api/resources/product/client/Client.ts">delete</a>(id, { ...params }) -> Stripe.DeletedProduct</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Delete a product. Deleting a product is only possible if it has no prices associated with it. Additionally, deleting a product with <code>type=good</code> is only possible if it has no SKUs associated with it.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.product.delete("id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.ProductDeleteRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Product.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## ProductFeature

<details><summary><code>client.productFeature.<a href="/src/api/resources/productFeature/client/Client.ts">list</a>(product, { ...params }) -> Stripe.ProductFeatureListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Retrieve a list of features for a product</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.productFeature.list("product");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**product:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.ProductFeatureListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ProductFeature.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.productFeature.<a href="/src/api/resources/productFeature/client/Client.ts">create</a>(product, { ...params }) -> Stripe.ProductFeature</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Creates a product_feature, which represents a feature attachment to a product</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.productFeature.create("product", {
    entitlement_feature: "entitlement_feature",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**product:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.ProductFeatureCreateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ProductFeature.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.productFeature.<a href="/src/api/resources/productFeature/client/Client.ts">retrieve</a>(id, product, { ...params }) -> Stripe.ProductFeature</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Retrieves a product_feature, which represents a feature attachment to a product</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.productFeature.retrieve("id", "product");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` — The ID of the product_feature.

</dd>
</dl>

<dl>
<dd>

**product:** `string` — The ID of the product.

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.ProductFeatureRetrieveRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ProductFeature.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.productFeature.<a href="/src/api/resources/productFeature/client/Client.ts">delete</a>(id, product, { ...params }) -> Stripe.DeletedProductFeature</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Deletes the feature attachment to a product</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.productFeature.delete("id", "product");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**product:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.ProductFeatureDeleteRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ProductFeature.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## PromotionCode

<details><summary><code>client.promotionCode.<a href="/src/api/resources/promotionCode/client/Client.ts">list</a>({ ...params }) -> Stripe.PromotionCodeListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Returns a list of your promotion codes.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.promotionCode.list();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Stripe.PromotionCodeListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PromotionCode.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.promotionCode.<a href="/src/api/resources/promotionCode/client/Client.ts">create</a>({ ...params }) -> Stripe.PromotionCode</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>A promotion code points to a coupon. You can optionally restrict the code to a specific customer, redemption limit, and expiration date.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.promotionCode.create({
    coupon: "coupon",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Stripe.PromotionCodeCreateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PromotionCode.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.promotionCode.<a href="/src/api/resources/promotionCode/client/Client.ts">retrieve</a>(promotionCode, { ...params }) -> Stripe.PromotionCode</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Retrieves the promotion code with the given ID. In order to retrieve a promotion code by the customer-facing <code>code</code> use <a href="/docs/api/promotion_codes/list">list</a> with the desired <code>code</code>.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.promotionCode.retrieve("promotion_code");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**promotionCode:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.PromotionCodeRetrieveRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PromotionCode.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.promotionCode.<a href="/src/api/resources/promotionCode/client/Client.ts">update</a>(promotionCode, { ...params }) -> Stripe.PromotionCode</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Updates the specified promotion code by setting the values of the parameters passed. Most fields are, by design, not editable.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.promotionCode.update("promotion_code");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**promotionCode:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.PromotionCodeUpdateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PromotionCode.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Quote

<details><summary><code>client.quote.<a href="/src/api/resources/quote/client/Client.ts">list</a>({ ...params }) -> Stripe.QuoteListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Returns a list of your quotes.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.quote.list();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Stripe.QuoteListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Quote.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.quote.<a href="/src/api/resources/quote/client/Client.ts">create</a>({ ...params }) -> Stripe.Quote</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>A quote models prices and services for a customer. Default options for <code>header</code>, <code>description</code>, <code>footer</code>, and <code>expires_at</code> can be set in the dashboard via the <a href="https://dashboard.stripe.com/settings/billing/quote">quote template</a>.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.quote.create();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Stripe.QuoteCreateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Quote.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.quote.<a href="/src/api/resources/quote/client/Client.ts">retrieve</a>(quote, { ...params }) -> Stripe.Quote</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Retrieves the quote with the given ID.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.quote.retrieve("quote");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**quote:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.QuoteRetrieveRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Quote.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.quote.<a href="/src/api/resources/quote/client/Client.ts">update</a>(quote, { ...params }) -> Stripe.Quote</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>A quote models prices and services for a customer.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.quote.update("quote");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**quote:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.QuoteUpdateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Quote.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.quote.<a href="/src/api/resources/quote/client/Client.ts">accept</a>(quote, { ...params }) -> Stripe.Quote</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Accepts the specified quote.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.quote.accept("quote");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**quote:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.QuoteAcceptRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Quote.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.quote.<a href="/src/api/resources/quote/client/Client.ts">cancel</a>(quote, { ...params }) -> Stripe.Quote</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Cancels the quote.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.quote.cancel("quote");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**quote:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.QuoteCancelRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Quote.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.quote.<a href="/src/api/resources/quote/client/Client.ts">listComputedUpfrontLineItems</a>(quote, { ...params }) -> Stripe.QuoteListComputedUpfrontLineItemsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>When retrieving a quote, there is an includable <a href="https://stripe.com/docs/api/quotes/object#quote_object-computed-upfront-line_items"><strong>computed.upfront.line_items</strong></a> property containing the first handful of those items. There is also a URL where you can retrieve the full (paginated) list of upfront line items.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.quote.listComputedUpfrontLineItems("quote");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**quote:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.QuoteListComputedUpfrontLineItemsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Quote.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.quote.<a href="/src/api/resources/quote/client/Client.ts">finalizeQuote</a>(quote, { ...params }) -> Stripe.Quote</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Finalizes the quote.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.quote.finalizeQuote("quote");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**quote:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.QuoteFinalizeQuoteRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Quote.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.quote.<a href="/src/api/resources/quote/client/Client.ts">listLineItems</a>(quote, { ...params }) -> Stripe.QuoteListLineItemsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>When retrieving a quote, there is an includable <strong>line_items</strong> property containing the first handful of those items. There is also a URL where you can retrieve the full (paginated) list of line items.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.quote.listLineItems("quote");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**quote:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.QuoteListLineItemsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Quote.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Refund

<details><summary><code>client.refund.<a href="/src/api/resources/refund/client/Client.ts">list</a>({ ...params }) -> Stripe.RefundListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Returns a list of all refunds you created. We return the refunds in sorted order, with the most recent refunds appearing first. The 10 most recent refunds are always available by default on the Charge object.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.refund.list();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Stripe.RefundListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Refund.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.refund.<a href="/src/api/resources/refund/client/Client.ts">create</a>({ ...params }) -> Stripe.Refund</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>When you create a new refund, you must specify a Charge or a PaymentIntent object on which to create it.</p>

<p>Creating a new refund will refund a charge that has previously been created but not yet refunded.
Funds will be refunded to the credit or debit card that was originally charged.</p>

<p>You can optionally refund only part of a charge.
You can do so multiple times, until the entire charge has been refunded.</p>

<p>Once entirely refunded, a charge can’t be refunded again.
This method will raise an error when called on an already-refunded charge,
or when trying to refund more money than is left on a charge.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.refund.create();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Stripe.RefundCreateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Refund.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.refund.<a href="/src/api/resources/refund/client/Client.ts">retrieve</a>(refund, { ...params }) -> Stripe.Refund</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Retrieves the details of an existing refund.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.refund.retrieve("refund");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**refund:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.RefundRetrieveRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Refund.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.refund.<a href="/src/api/resources/refund/client/Client.ts">update</a>(refund, { ...params }) -> Stripe.Refund</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Updates the refund that you specify by setting the values of the passed parameters. Any parameters that you don’t provide remain unchanged.</p>

<p>This request only accepts <code>metadata</code> as an argument.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.refund.update("refund");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**refund:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.RefundUpdateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Refund.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.refund.<a href="/src/api/resources/refund/client/Client.ts">cancel</a>(refund, { ...params }) -> Stripe.Refund</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Cancels a refund with a status of <code>requires_action</code>.</p>

<p>You can’t cancel refunds in other states. Only refunds for payment methods that require customer action can enter the <code>requires_action</code> state.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.refund.cancel("refund");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**refund:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.RefundCancelRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Refund.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.refund.<a href="/src/api/resources/refund/client/Client.ts">expire</a>(refund, { ...params }) -> Stripe.Refund</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Expire a refund with a status of <code>requires_action</code>.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.refund.expire("refund");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**refund:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.RefundExpireRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Refund.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Review

<details><summary><code>client.review.<a href="/src/api/resources/review/client/Client.ts">list</a>({ ...params }) -> Stripe.ReviewListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Returns a list of <code>Review</code> objects that have <code>open</code> set to <code>true</code>. The objects are sorted in descending order by creation date, with the most recently created object appearing first.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.review.list();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Stripe.ReviewListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Review.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.review.<a href="/src/api/resources/review/client/Client.ts">retrieve</a>(review, { ...params }) -> Stripe.Review</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Retrieves a <code>Review</code> object.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.review.retrieve("review");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**review:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.ReviewRetrieveRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Review.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.review.<a href="/src/api/resources/review/client/Client.ts">approve</a>(review, { ...params }) -> Stripe.Review</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Approves a <code>Review</code> object, closing it and removing it from the list of reviews.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.review.approve("review");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**review:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.ReviewApproveRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Review.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## SetupAttempt

<details><summary><code>client.setupAttempt.<a href="/src/api/resources/setupAttempt/client/Client.ts">list</a>({ ...params }) -> Stripe.SetupAttemptListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Returns a list of SetupAttempts that associate with a provided SetupIntent.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.setupAttempt.list({
    setup_intent: "setup_intent",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Stripe.SetupAttemptListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SetupAttempt.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## SetupIntent

<details><summary><code>client.setupIntent.<a href="/src/api/resources/setupIntent/client/Client.ts">list</a>({ ...params }) -> Stripe.SetupIntentListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Returns a list of SetupIntents.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.setupIntent.list();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Stripe.SetupIntentListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SetupIntent.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.setupIntent.<a href="/src/api/resources/setupIntent/client/Client.ts">create</a>({ ...params }) -> Stripe.SetupIntent</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Creates a SetupIntent object.</p>

<p>After you create the SetupIntent, attach a payment method and <a href="/docs/api/setup_intents/confirm">confirm</a>
it to collect any required permissions to charge the payment method later.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.setupIntent.create();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Stripe.SetupIntentCreateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SetupIntent.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.setupIntent.<a href="/src/api/resources/setupIntent/client/Client.ts">retrieve</a>(intent, { ...params }) -> Stripe.SetupIntent</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Retrieves the details of a SetupIntent that has previously been created. </p>

<p>Client-side retrieval using a publishable key is allowed when the <code>client_secret</code> is provided in the query string. </p>

<p>When retrieved with a publishable key, only a subset of properties will be returned. Please refer to the <a href="#setup_intent_object">SetupIntent</a> object reference for more details.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.setupIntent.retrieve("intent");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**intent:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.SetupIntentRetrieveRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SetupIntent.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.setupIntent.<a href="/src/api/resources/setupIntent/client/Client.ts">update</a>(intent, { ...params }) -> Stripe.SetupIntent</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Updates a SetupIntent object.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.setupIntent.update("intent");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**intent:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.SetupIntentUpdateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SetupIntent.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.setupIntent.<a href="/src/api/resources/setupIntent/client/Client.ts">cancel</a>(intent, { ...params }) -> Stripe.SetupIntent</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>You can cancel a SetupIntent object when it’s in one of these statuses: <code>requires_payment_method</code>, <code>requires_confirmation</code>, or <code>requires_action</code>. </p>

<p>After you cancel it, setup is abandoned and any operations on the SetupIntent fail with an error. You can’t cancel the SetupIntent for a Checkout Session. <a href="/docs/api/checkout/sessions/expire">Expire the Checkout Session</a> instead.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.setupIntent.cancel("intent");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**intent:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.SetupIntentCancelRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SetupIntent.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.setupIntent.<a href="/src/api/resources/setupIntent/client/Client.ts">confirm</a>(intent, { ...params }) -> Stripe.SetupIntent</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Confirm that your customer intends to set up the current or
provided payment method. For example, you would confirm a SetupIntent
when a customer hits the “Save” button on a payment method management
page on your website.</p>

<p>If the selected payment method does not require any additional
steps from the customer, the SetupIntent will transition to the
<code>succeeded</code> status.</p>

<p>Otherwise, it will transition to the <code>requires_action</code> status and
suggest additional actions via <code>next_action</code>. If setup fails,
the SetupIntent will transition to the
<code>requires_payment_method</code> status or the <code>canceled</code> status if the
confirmation limit is reached.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.setupIntent.confirm("intent");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**intent:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.SetupIntentConfirmRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SetupIntent.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.setupIntent.<a href="/src/api/resources/setupIntent/client/Client.ts">verifyMicrodeposits</a>(intent, { ...params }) -> Stripe.SetupIntent</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Verifies microdeposits on a SetupIntent object.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.setupIntent.verifyMicrodeposits("intent");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**intent:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.SetupIntentVerifyMicrodepositsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SetupIntent.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## ShippingRate

<details><summary><code>client.shippingRate.<a href="/src/api/resources/shippingRate/client/Client.ts">list</a>({ ...params }) -> Stripe.ShippingRateListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Returns a list of your shipping rates.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.shippingRate.list();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Stripe.ShippingRateListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ShippingRate.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.shippingRate.<a href="/src/api/resources/shippingRate/client/Client.ts">create</a>({ ...params }) -> Stripe.ShippingRate</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Creates a new shipping rate object.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.shippingRate.create({
    display_name: "display_name",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Stripe.ShippingRateCreateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ShippingRate.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.shippingRate.<a href="/src/api/resources/shippingRate/client/Client.ts">retrieve</a>(shippingRateToken, { ...params }) -> Stripe.ShippingRate</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Returns the shipping rate object with the given ID.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.shippingRate.retrieve("shipping_rate_token");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**shippingRateToken:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.ShippingRateRetrieveRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ShippingRate.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.shippingRate.<a href="/src/api/resources/shippingRate/client/Client.ts">update</a>(shippingRateToken, { ...params }) -> Stripe.ShippingRate</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Updates an existing shipping rate object.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.shippingRate.update("shipping_rate_token");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**shippingRateToken:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.ShippingRateUpdateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ShippingRate.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## ScheduledQueryRun

<details><summary><code>client.scheduledQueryRun.<a href="/src/api/resources/scheduledQueryRun/client/Client.ts">list</a>({ ...params }) -> Stripe.ScheduledQueryRunListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Returns a list of scheduled query runs.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.scheduledQueryRun.list();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Stripe.ScheduledQueryRunListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ScheduledQueryRun.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.scheduledQueryRun.<a href="/src/api/resources/scheduledQueryRun/client/Client.ts">retrieve</a>(scheduledQueryRun, { ...params }) -> Stripe.ScheduledQueryRun</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Retrieves the details of an scheduled query run.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.scheduledQueryRun.retrieve("scheduled_query_run");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**scheduledQueryRun:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.ScheduledQueryRunRetrieveRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ScheduledQueryRun.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## SubscriptionItem

<details><summary><code>client.subscriptionItem.<a href="/src/api/resources/subscriptionItem/client/Client.ts">list</a>({ ...params }) -> Stripe.SubscriptionItemListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Returns a list of your subscription items for a given subscription.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.subscriptionItem.list({
    subscription: "subscription",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Stripe.SubscriptionItemListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SubscriptionItem.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.subscriptionItem.<a href="/src/api/resources/subscriptionItem/client/Client.ts">create</a>({ ...params }) -> Stripe.SubscriptionItem</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Adds a new item to an existing subscription. No existing items will be changed or replaced.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.subscriptionItem.create({
    subscription: "subscription",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Stripe.SubscriptionItemCreateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SubscriptionItem.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.subscriptionItem.<a href="/src/api/resources/subscriptionItem/client/Client.ts">retrieve</a>(item, { ...params }) -> Stripe.SubscriptionItem</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Retrieves the subscription item with the given ID.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.subscriptionItem.retrieve("item");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**item:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.SubscriptionItemRetrieveRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SubscriptionItem.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.subscriptionItem.<a href="/src/api/resources/subscriptionItem/client/Client.ts">update</a>(item, { ...params }) -> Stripe.SubscriptionItem</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Updates the plan or quantity of an item on a current subscription.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.subscriptionItem.update("item");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**item:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.SubscriptionItemUpdateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SubscriptionItem.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.subscriptionItem.<a href="/src/api/resources/subscriptionItem/client/Client.ts">delete</a>(item, { ...params }) -> Stripe.DeletedSubscriptionItem</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Deletes an item from the subscription. Removing a subscription item from a subscription will not cancel the subscription.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.subscriptionItem.delete("item");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**item:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.SubscriptionItemDeleteRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SubscriptionItem.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## UsageRecordSummary

<details><summary><code>client.usageRecordSummary.<a href="/src/api/resources/usageRecordSummary/client/Client.ts">list</a>(subscriptionItem, { ...params }) -> Stripe.UsageRecordSummaryListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>For the specified subscription item, returns a list of summary objects. Each object in the list provides usage information that’s been summarized from multiple usage records and over a subscription billing period (e.g., 15 usage records in the month of September).</p>

<p>The list is sorted in reverse-chronological order (newest first). The first list item represents the most current usage period that hasn’t ended yet. Since new usage records can still be added, the returned summary information for the subscription item’s ID should be seen as unstable until the subscription billing period ends.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.usageRecordSummary.list("subscription_item");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**subscriptionItem:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.UsageRecordSummaryListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `UsageRecordSummary.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## UsageRecord

<details><summary><code>client.usageRecord.<a href="/src/api/resources/usageRecord/client/Client.ts">create</a>(subscriptionItem, { ...params }) -> Stripe.UsageRecord</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Creates a usage record for a specified subscription item and date, and fills it with a quantity.</p>

<p>Usage records provide <code>quantity</code> information that Stripe uses to track how much a customer is using your service. With usage information and the pricing model set up by the <a href="https://stripe.com/docs/billing/subscriptions/metered-billing">metered billing</a> plan, Stripe helps you send accurate invoices to your customers.</p>

<p>The default calculation for usage is to add up all the <code>quantity</code> values of the usage records within a billing period. You can change this default behavior with the billing plan’s <code>aggregate_usage</code> <a href="/docs/api/plans/create#create_plan-aggregate_usage">parameter</a>. When there is more than one usage record with the same timestamp, Stripe adds the <code>quantity</code> values together. In most cases, this is the desired resolution, however, you can change this behavior with the <code>action</code> parameter.</p>

<p>The default pricing model for metered billing is <a href="/docs/api/plans/object#plan_object-billing_scheme">per-unit pricing</a>. For finer granularity, you can configure metered billing to have a <a href="https://stripe.com/docs/billing/subscriptions/tiers">tiered pricing</a> model.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.usageRecord.create("subscription_item", {
    quantity: 1,
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**subscriptionItem:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.UsageRecordCreateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `UsageRecord.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## SubscriptionSchedule

<details><summary><code>client.subscriptionSchedule.<a href="/src/api/resources/subscriptionSchedule/client/Client.ts">list</a>({ ...params }) -> Stripe.SubscriptionScheduleListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Retrieves the list of your subscription schedules.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.subscriptionSchedule.list();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Stripe.SubscriptionScheduleListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SubscriptionSchedule.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.subscriptionSchedule.<a href="/src/api/resources/subscriptionSchedule/client/Client.ts">create</a>({ ...params }) -> Stripe.SubscriptionSchedule</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Creates a new subscription schedule object. Each customer can have up to 500 active or scheduled subscriptions.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.subscriptionSchedule.create();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Stripe.SubscriptionScheduleCreateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SubscriptionSchedule.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.subscriptionSchedule.<a href="/src/api/resources/subscriptionSchedule/client/Client.ts">retrieve</a>(schedule, { ...params }) -> Stripe.SubscriptionSchedule</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Retrieves the details of an existing subscription schedule. You only need to supply the unique subscription schedule identifier that was returned upon subscription schedule creation.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.subscriptionSchedule.retrieve("schedule");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**schedule:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.SubscriptionScheduleRetrieveRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SubscriptionSchedule.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.subscriptionSchedule.<a href="/src/api/resources/subscriptionSchedule/client/Client.ts">update</a>(schedule, { ...params }) -> Stripe.SubscriptionSchedule</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Updates an existing subscription schedule.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.subscriptionSchedule.update("schedule");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**schedule:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.SubscriptionScheduleUpdateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SubscriptionSchedule.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.subscriptionSchedule.<a href="/src/api/resources/subscriptionSchedule/client/Client.ts">cancel</a>(schedule, { ...params }) -> Stripe.SubscriptionSchedule</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Cancels a subscription schedule and its associated subscription immediately (if the subscription schedule has an active subscription). A subscription schedule can only be canceled if its status is <code>not_started</code> or <code>active</code>.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.subscriptionSchedule.cancel("schedule");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**schedule:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.SubscriptionScheduleCancelRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SubscriptionSchedule.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.subscriptionSchedule.<a href="/src/api/resources/subscriptionSchedule/client/Client.ts">release</a>(schedule, { ...params }) -> Stripe.SubscriptionSchedule</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Releases the subscription schedule immediately, which will stop scheduling of its phases, but leave any existing subscription in place. A schedule can only be released if its status is <code>not_started</code> or <code>active</code>. If the subscription schedule is currently associated with a subscription, releasing it will remove its <code>subscription</code> property and set the subscription’s ID to the <code>released_subscription</code> property.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.subscriptionSchedule.release("schedule");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**schedule:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.SubscriptionScheduleReleaseRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SubscriptionSchedule.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Subscription

<details><summary><code>client.subscription.<a href="/src/api/resources/subscription/client/Client.ts">list</a>({ ...params }) -> Stripe.SubscriptionListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>By default, returns a list of subscriptions that have not been canceled. In order to list canceled subscriptions, specify <code>status=canceled</code>.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.subscription.list();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Stripe.SubscriptionListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Subscription.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.subscription.<a href="/src/api/resources/subscription/client/Client.ts">create</a>({ ...params }) -> Stripe.Subscription</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Creates a new subscription on an existing customer. Each customer can have up to 500 active or scheduled subscriptions.</p>

<p>When you create a subscription with <code>collection_method=charge_automatically</code>, the first invoice is finalized as part of the request.
The <code>payment_behavior</code> parameter determines the exact behavior of the initial payment.</p>

<p>To start subscriptions where the first invoice always begins in a <code>draft</code> status, use <a href="/docs/billing/subscriptions/subscription-schedules#managing">subscription schedules</a> instead.
Schedules provide the flexibility to model more complex billing configurations that change over time.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.subscription.create({
    customer: "customer",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Stripe.SubscriptionCreateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Subscription.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.subscription.<a href="/src/api/resources/subscription/client/Client.ts">search</a>({ ...params }) -> Stripe.SubscriptionSearchResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Search for subscriptions you’ve previously created using Stripe’s <a href="/docs/search#search-query-language">Search Query Language</a>.
Don’t use search in read-after-write flows where strict consistency is necessary. Under normal operating
conditions, data is searchable in less than a minute. Occasionally, propagation of new or updated data can be up
to an hour behind during outages. Search functionality is not available to merchants in India.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.subscription.search({
    query: "query",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Stripe.SubscriptionSearchRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Subscription.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.subscription.<a href="/src/api/resources/subscription/client/Client.ts">retrieve</a>(subscriptionExposedId, { ...params }) -> Stripe.Subscription</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Retrieves the subscription with the given ID.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.subscription.retrieve("subscription_exposed_id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**subscriptionExposedId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.SubscriptionRetrieveRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Subscription.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.subscription.<a href="/src/api/resources/subscription/client/Client.ts">update</a>(subscriptionExposedId, { ...params }) -> Stripe.Subscription</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Updates an existing subscription to match the specified parameters.
When changing prices or quantities, we optionally prorate the price we charge next month to make up for any price changes.
To preview how the proration is calculated, use the <a href="/docs/api/invoices/create_preview">create preview</a> endpoint.</p>

<p>By default, we prorate subscription changes. For example, if a customer signs up on May 1 for a <currency>100</currency> price, they’ll be billed <currency>100</currency> immediately. If on May 15 they switch to a <currency>200</currency> price, then on June 1 they’ll be billed <currency>250</currency> (<currency>200</currency> for a renewal of her subscription, plus a <currency>50</currency> prorating adjustment for half of the previous month’s <currency>100</currency> difference). Similarly, a downgrade generates a credit that is applied to the next invoice. We also prorate when you make quantity changes.</p>

<p>Switching prices does not normally change the billing date or generate an immediate charge unless:</p>

<ul>
<li>The billing interval is changed (for example, from monthly to yearly).</li>
<li>The subscription moves from free to paid.</li>
<li>A trial starts or ends.</li>
</ul>

<p>In these cases, we apply a credit for the unused time on the previous price, immediately charge the customer using the new price, and reset the billing date. Learn about how <a href="/docs/billing/subscriptions/upgrade-downgrade#immediate-payment">Stripe immediately attempts payment for subscription changes</a>.</p>

<p>If you want to charge for an upgrade immediately, pass <code>proration_behavior</code> as <code>always_invoice</code> to create prorations, automatically invoice the customer for those proration adjustments, and attempt to collect payment. If you pass <code>create_prorations</code>, the prorations are created but not automatically invoiced. If you want to bill the customer for the prorations before the subscription’s renewal date, you need to manually <a href="/docs/api/invoices/create">invoice the customer</a>.</p>

<p>If you don’t want to prorate, set the <code>proration_behavior</code> option to <code>none</code>. With this option, the customer is billed <currency>100</currency> on May 1 and <currency>200</currency> on June 1. Similarly, if you set <code>proration_behavior</code> to <code>none</code> when switching between different billing intervals (for example, from monthly to yearly), we don’t generate any credits for the old subscription’s unused time. We still reset the billing date and bill immediately for the new subscription.</p>

<p>Updating the quantity on a subscription many times in an hour may result in <a href="/docs/rate-limits">rate limiting</a>. If you need to bill for a frequently changing quantity, consider integrating <a href="/docs/billing/subscriptions/usage-based">usage-based billing</a> instead.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.subscription.update("subscription_exposed_id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**subscriptionExposedId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.SubscriptionUpdateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Subscription.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.subscription.<a href="/src/api/resources/subscription/client/Client.ts">cancel</a>(subscriptionExposedId, { ...params }) -> Stripe.Subscription</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Cancels a customer’s subscription immediately. The customer won’t be charged again for the subscription. After it’s canceled, you can no longer update the subscription or its <a href="/metadata">metadata</a>.</p>

<p>Any pending invoice items that you’ve created are still charged at the end of the period, unless manually <a href="#delete_invoiceitem">deleted</a>. If you’ve set the subscription to cancel at the end of the period, any pending prorations are also left in place and collected at the end of the period. But if the subscription is set to cancel immediately, pending prorations are removed.</p>

<p>By default, upon subscription cancellation, Stripe stops automatic collection of all finalized invoices for the customer. This is intended to prevent unexpected payment attempts after the customer has canceled a subscription. However, you can resume automatic collection of the invoices manually after subscription cancellation to have us proceed. Or, you could check for unpaid invoices before allowing the customer to cancel the subscription at all.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.subscription.cancel("subscription_exposed_id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**subscriptionExposedId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.SubscriptionCancelRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Subscription.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.subscription.<a href="/src/api/resources/subscription/client/Client.ts">deleteDiscount</a>(subscriptionExposedId, { ...params }) -> Stripe.DeletedDiscount</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Removes the currently applied discount on a subscription.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.subscription.deleteDiscount("subscription_exposed_id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**subscriptionExposedId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.SubscriptionDeleteDiscountRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Subscription.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.subscription.<a href="/src/api/resources/subscription/client/Client.ts">resume</a>(subscription, { ...params }) -> Stripe.Subscription</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Initiates resumption of a paused subscription, optionally resetting the billing cycle anchor and creating prorations. If a resumption invoice is generated, it must be paid or marked uncollectible before the subscription will be unpaused. If payment succeeds the subscription will become <code>active</code>, and if payment fails the subscription will be <code>past_due</code>. The resumption invoice will void automatically if not paid by the expiration date.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.subscription.resume("subscription");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**subscription:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.SubscriptionResumeRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Subscription.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## TaxCode

<details><summary><code>client.taxCode.<a href="/src/api/resources/taxCode/client/Client.ts">list</a>({ ...params }) -> Stripe.TaxCodeListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>A list of <a href="https://stripe.com/docs/tax/tax-categories">all tax codes available</a> to add to Products in order to allow specific tax calculations.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.taxCode.list();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Stripe.TaxCodeListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TaxCode.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.taxCode.<a href="/src/api/resources/taxCode/client/Client.ts">retrieve</a>(id, { ...params }) -> Stripe.TaxCode</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Retrieves the details of an existing tax code. Supply the unique tax code ID and Stripe will return the corresponding tax code information.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.taxCode.retrieve("id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.TaxCodeRetrieveRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TaxCode.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## TaxRate

<details><summary><code>client.taxRate.<a href="/src/api/resources/taxRate/client/Client.ts">list</a>({ ...params }) -> Stripe.TaxRateListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Returns a list of your tax rates. Tax rates are returned sorted by creation date, with the most recently created tax rates appearing first.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.taxRate.list();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Stripe.TaxRateListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TaxRate.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.taxRate.<a href="/src/api/resources/taxRate/client/Client.ts">create</a>({ ...params }) -> Stripe.TaxRate</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Creates a new tax rate.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.taxRate.create({
    display_name: "display_name",
    inclusive: true,
    percentage: 1.1,
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Stripe.TaxRateCreateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TaxRate.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.taxRate.<a href="/src/api/resources/taxRate/client/Client.ts">retrieve</a>(taxRate, { ...params }) -> Stripe.TaxRate</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Retrieves a tax rate with the given ID</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.taxRate.retrieve("tax_rate");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**taxRate:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.TaxRateRetrieveRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TaxRate.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.taxRate.<a href="/src/api/resources/taxRate/client/Client.ts">update</a>(taxRate, { ...params }) -> Stripe.TaxRate</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Updates an existing tax rate.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.taxRate.update("tax_rate");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**taxRate:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.TaxRateUpdateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TaxRate.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Token

<details><summary><code>client.token.<a href="/src/api/resources/token/client/Client.ts">create</a>({ ...params }) -> Stripe.Token</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Creates a single-use token that represents a bank account’s details.
You can use this token with any v1 API method in place of a bank account dictionary. You can only use this token once. To do so, attach it to a <a href="#accounts">connected account</a> where <a href="/api/accounts/object#account_object-controller-requirement_collection">controller.requirement_collection</a> is <code>application</code>, which includes Custom accounts.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.token.create();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Stripe.TokenCreateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Token.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.token.<a href="/src/api/resources/token/client/Client.ts">retrieve</a>(token, { ...params }) -> Stripe.Token</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Retrieves the token with the given ID.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.token.retrieve("token");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**token:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.TokenRetrieveRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Token.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Topup

<details><summary><code>client.topup.<a href="/src/api/resources/topup/client/Client.ts">list</a>({ ...params }) -> Stripe.TopupListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Returns a list of top-ups.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.topup.list();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Stripe.TopupListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Topup.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.topup.<a href="/src/api/resources/topup/client/Client.ts">create</a>({ ...params }) -> Stripe.Topup</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Top up the balance of an account</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.topup.create({
    amount: 1,
    currency: "currency",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Stripe.TopupCreateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Topup.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.topup.<a href="/src/api/resources/topup/client/Client.ts">retrieve</a>(topup, { ...params }) -> Stripe.Topup</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Retrieves the details of a top-up that has previously been created. Supply the unique top-up ID that was returned from your previous request, and Stripe will return the corresponding top-up information.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.topup.retrieve("topup");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**topup:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.TopupRetrieveRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Topup.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.topup.<a href="/src/api/resources/topup/client/Client.ts">update</a>(topup, { ...params }) -> Stripe.Topup</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Updates the metadata of a top-up. Other top-up details are not editable by design.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.topup.update("topup");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**topup:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.TopupUpdateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Topup.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.topup.<a href="/src/api/resources/topup/client/Client.ts">cancel</a>(topup, { ...params }) -> Stripe.Topup</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Cancels a top-up. Only pending top-ups can be canceled.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.topup.cancel("topup");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**topup:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.TopupCancelRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Topup.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Transfer

<details><summary><code>client.transfer.<a href="/src/api/resources/transfer/client/Client.ts">list</a>({ ...params }) -> Stripe.TransferListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Returns a list of existing transfers sent to connected accounts. The transfers are returned in sorted order, with the most recently created transfers appearing first.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.transfer.list();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Stripe.TransferListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Transfer.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.transfer.<a href="/src/api/resources/transfer/client/Client.ts">create</a>({ ...params }) -> Stripe.Transfer</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>To send funds from your Stripe account to a connected account, you create a new transfer object. Your <a href="#balance">Stripe balance</a> must be able to cover the transfer amount, or you’ll receive an “Insufficient Funds” error.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.transfer.create({
    currency: "currency",
    destination: "destination",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Stripe.TransferCreateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Transfer.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.transfer.<a href="/src/api/resources/transfer/client/Client.ts">retrieve</a>(transfer, { ...params }) -> Stripe.Transfer</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Retrieves the details of an existing transfer. Supply the unique transfer ID from either a transfer creation request or the transfer list, and Stripe will return the corresponding transfer information.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.transfer.retrieve("transfer");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**transfer:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.TransferRetrieveRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Transfer.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.transfer.<a href="/src/api/resources/transfer/client/Client.ts">update</a>(transfer, { ...params }) -> Stripe.Transfer</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Updates the specified transfer by setting the values of the parameters passed. Any parameters not provided will be left unchanged.</p>

<p>This request accepts only metadata as an argument.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.transfer.update("transfer");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**transfer:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.TransferUpdateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Transfer.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## TransferReversal

<details><summary><code>client.transferReversal.<a href="/src/api/resources/transferReversal/client/Client.ts">list</a>(id, { ...params }) -> Stripe.TransferReversalListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>You can see a list of the reversals belonging to a specific transfer. Note that the 10 most recent reversals are always available by default on the transfer object. If you need more than those 10, you can use this API method and the <code>limit</code> and <code>starting_after</code> parameters to page through additional reversals.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.transferReversal.list("id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.TransferReversalListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TransferReversal.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.transferReversal.<a href="/src/api/resources/transferReversal/client/Client.ts">create</a>(id, { ...params }) -> Stripe.TransferReversal</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>When you create a new reversal, you must specify a transfer to create it on.</p>

<p>When reversing transfers, you can optionally reverse part of the transfer. You can do so as many times as you wish until the entire transfer has been reversed.</p>

<p>Once entirely reversed, a transfer can’t be reversed again. This method will return an error when called on an already-reversed transfer, or when trying to reverse more money than is left on a transfer.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.transferReversal.create("id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.TransferReversalCreateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TransferReversal.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.transferReversal.<a href="/src/api/resources/transferReversal/client/Client.ts">retrieve</a>(id, transfer, { ...params }) -> Stripe.TransferReversal</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>By default, you can see the 10 most recent reversals stored directly on the transfer object, but you can also retrieve details about a specific reversal stored on the transfer.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.transferReversal.retrieve("id", "transfer");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**transfer:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.TransferReversalRetrieveRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TransferReversal.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.transferReversal.<a href="/src/api/resources/transferReversal/client/Client.ts">update</a>(id, transfer, { ...params }) -> Stripe.TransferReversal</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Updates the specified reversal by setting the values of the parameters passed. Any parameters not provided will be left unchanged.</p>

<p>This request only accepts metadata and description as arguments.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.transferReversal.update("id", "transfer");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**transfer:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.TransferReversalUpdateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TransferReversal.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## WebhookEndpoint

<details><summary><code>client.webhookEndpoint.<a href="/src/api/resources/webhookEndpoint/client/Client.ts">list</a>({ ...params }) -> Stripe.WebhookEndpointListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Returns a list of your webhook endpoints.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.webhookEndpoint.list();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Stripe.WebhookEndpointListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `WebhookEndpoint.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.webhookEndpoint.<a href="/src/api/resources/webhookEndpoint/client/Client.ts">create</a>({ ...params }) -> Stripe.WebhookEndpoint</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>A webhook endpoint must have a <code>url</code> and a list of <code>enabled_events</code>. You may optionally specify the Boolean <code>connect</code> parameter. If set to true, then a Connect webhook endpoint that notifies the specified <code>url</code> about events from all connected accounts is created; otherwise an account webhook endpoint that notifies the specified <code>url</code> only about events from your account is created. You can also create webhook endpoints in the <a href="https://dashboard.stripe.com/account/webhooks">webhooks settings</a> section of the Dashboard.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.webhookEndpoint.create({
    enabled_events: ["*"],
    url: "url",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Stripe.WebhookEndpointCreateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `WebhookEndpoint.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.webhookEndpoint.<a href="/src/api/resources/webhookEndpoint/client/Client.ts">retrieve</a>(webhookEndpoint, { ...params }) -> Stripe.WebhookEndpoint</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Retrieves the webhook endpoint with the given ID.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.webhookEndpoint.retrieve("webhook_endpoint");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**webhookEndpoint:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.WebhookEndpointRetrieveRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `WebhookEndpoint.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.webhookEndpoint.<a href="/src/api/resources/webhookEndpoint/client/Client.ts">update</a>(webhookEndpoint, { ...params }) -> Stripe.WebhookEndpoint</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Updates the webhook endpoint. You may edit the <code>url</code>, the list of <code>enabled_events</code>, and the status of your endpoint.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.webhookEndpoint.update("webhook_endpoint");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**webhookEndpoint:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.WebhookEndpointUpdateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `WebhookEndpoint.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.webhookEndpoint.<a href="/src/api/resources/webhookEndpoint/client/Client.ts">delete</a>(webhookEndpoint, { ...params }) -> Stripe.DeletedWebhookEndpoint</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>You can also delete webhook endpoints via the <a href="https://dashboard.stripe.com/account/webhooks">webhook endpoint management</a> page of the Stripe dashboard.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.webhookEndpoint.delete("webhook_endpoint");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**webhookEndpoint:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.WebhookEndpointDeleteRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `WebhookEndpoint.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Apps Secret

<details><summary><code>client.apps.secret.<a href="/src/api/resources/apps/resources/secret/client/Client.ts">list</a>({ ...params }) -> Stripe.SecretListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>List all secrets stored on the given scope.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.apps.secret.list({
    scope: {
        type: "account",
        user: undefined,
    },
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Stripe.apps.SecretListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Secret.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.apps.secret.<a href="/src/api/resources/apps/resources/secret/client/Client.ts">create</a>({ ...params }) -> Stripe.AppsSecret</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Create or replace a secret in the secret store.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.apps.secret.create({
    name: "name",
    payload: "payload",
    scope: {
        type: "account",
    },
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Stripe.apps.SecretCreateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Secret.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.apps.secret.<a href="/src/api/resources/apps/resources/secret/client/Client.ts">deleteWhere</a>({ ...params }) -> Stripe.AppsSecret</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Deletes a secret from the secret store by name and scope.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.apps.secret.deleteWhere({
    name: "name",
    scope: {
        type: "account",
    },
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Stripe.apps.SecretDeleteWhereRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Secret.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.apps.secret.<a href="/src/api/resources/apps/resources/secret/client/Client.ts">find</a>({ ...params }) -> Stripe.AppsSecret</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Finds a secret in the secret store by name and scope.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.apps.secret.find({
    name: "blackcurrant............................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................",
    scope: {
        type: "account",
        user: undefined,
    },
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Stripe.apps.SecretFindRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Secret.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Billing Alert

<details><summary><code>client.billing.alert.<a href="/src/api/resources/billing/resources/alert/client/Client.ts">list</a>({ ...params }) -> Stripe.AlertListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Lists billing active and inactive alerts</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.billing.alert.list();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Stripe.billing.AlertListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Alert.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.billing.alert.<a href="/src/api/resources/billing/resources/alert/client/Client.ts">create</a>({ ...params }) -> Stripe.BillingAlert</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Creates a billing alert</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.billing.alert.create({
    title: "title",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Stripe.billing.AlertCreateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Alert.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.billing.alert.<a href="/src/api/resources/billing/resources/alert/client/Client.ts">retrieve</a>(id, { ...params }) -> Stripe.BillingAlert</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Retrieves a billing alert given an ID</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.billing.alert.retrieve("id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.billing.AlertRetrieveRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Alert.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.billing.alert.<a href="/src/api/resources/billing/resources/alert/client/Client.ts">activate</a>(id, { ...params }) -> Stripe.BillingAlert</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Reactivates this alert, allowing it to trigger again.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.billing.alert.activate("id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.billing.AlertActivateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Alert.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.billing.alert.<a href="/src/api/resources/billing/resources/alert/client/Client.ts">archive</a>(id, { ...params }) -> Stripe.BillingAlert</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Archives this alert, removing it from the list view and APIs. This is non-reversible.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.billing.alert.archive("id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.billing.AlertArchiveRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Alert.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.billing.alert.<a href="/src/api/resources/billing/resources/alert/client/Client.ts">deactivate</a>(id, { ...params }) -> Stripe.BillingAlert</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Deactivates this alert, preventing it from triggering.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.billing.alert.deactivate("id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.billing.AlertDeactivateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Alert.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Billing CreditBalanceSummary

<details><summary><code>client.billing.creditBalanceSummary.<a href="/src/api/resources/billing/resources/creditBalanceSummary/client/Client.ts">retrieve</a>({ ...params }) -> Stripe.BillingCreditBalanceSummary</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Retrieves the credit balance summary for a customer.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.billing.creditBalanceSummary.retrieve({
    customer:
        "blackcurrant............................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................",
    filter: {
        applicability_scope: undefined,
        credit_grant: undefined,
        type: "applicability_scope",
    },
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Stripe.billing.CreditBalanceSummaryRetrieveRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CreditBalanceSummary.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Billing CreditBalanceTransaction

<details><summary><code>client.billing.creditBalanceTransaction.<a href="/src/api/resources/billing/resources/creditBalanceTransaction/client/Client.ts">list</a>({ ...params }) -> Stripe.CreditBalanceTransactionListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Retrieve a list of credit balance transactions.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.billing.creditBalanceTransaction.list({
    customer: "customer",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Stripe.billing.CreditBalanceTransactionListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CreditBalanceTransaction.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.billing.creditBalanceTransaction.<a href="/src/api/resources/billing/resources/creditBalanceTransaction/client/Client.ts">retrieve</a>(id, { ...params }) -> Stripe.BillingCreditBalanceTransaction</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Retrieves a credit balance transaction.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.billing.creditBalanceTransaction.retrieve("id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` — Unique identifier for the object.

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.billing.CreditBalanceTransactionRetrieveRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CreditBalanceTransaction.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Billing CreditGrant

<details><summary><code>client.billing.creditGrant.<a href="/src/api/resources/billing/resources/creditGrant/client/Client.ts">list</a>({ ...params }) -> Stripe.CreditGrantListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Retrieve a list of credit grants.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.billing.creditGrant.list();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Stripe.billing.CreditGrantListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CreditGrant.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.billing.creditGrant.<a href="/src/api/resources/billing/resources/creditGrant/client/Client.ts">create</a>({ ...params }) -> Stripe.BillingCreditGrant</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Creates a credit grant.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.billing.creditGrant.create({
    amount: {
        type: "monetary",
    },
    applicability_config: {
        scope: {
            price_type: "metered",
        },
    },
    category: "paid",
    customer: "customer",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Stripe.billing.CreditGrantCreateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CreditGrant.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.billing.creditGrant.<a href="/src/api/resources/billing/resources/creditGrant/client/Client.ts">retrieve</a>(id, { ...params }) -> Stripe.BillingCreditGrant</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Retrieves a credit grant.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.billing.creditGrant.retrieve("id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` — Unique identifier for the object.

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.billing.CreditGrantRetrieveRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CreditGrant.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.billing.creditGrant.<a href="/src/api/resources/billing/resources/creditGrant/client/Client.ts">update</a>(id, { ...params }) -> Stripe.BillingCreditGrant</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Updates a credit grant.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.billing.creditGrant.update("id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` — Unique identifier for the object.

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.billing.CreditGrantUpdateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CreditGrant.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.billing.creditGrant.<a href="/src/api/resources/billing/resources/creditGrant/client/Client.ts">expire</a>(id, { ...params }) -> Stripe.BillingCreditGrant</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Expires a credit grant.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.billing.creditGrant.expire("id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` — Unique identifier for the object.

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.billing.CreditGrantExpireRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CreditGrant.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.billing.creditGrant.<a href="/src/api/resources/billing/resources/creditGrant/client/Client.ts">voidGrant</a>(id, { ...params }) -> Stripe.BillingCreditGrant</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Voids a credit grant.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.billing.creditGrant.voidGrant("id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` — Unique identifier for the object.

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.billing.CreditGrantVoidGrantRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CreditGrant.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Billing MeterEventAdjustment

<details><summary><code>client.billing.meterEventAdjustment.<a href="/src/api/resources/billing/resources/meterEventAdjustment/client/Client.ts">create</a>({ ...params }) -> Stripe.BillingMeterEventAdjustment</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Creates a billing meter event adjustment.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.billing.meterEventAdjustment.create({
    event_name: "event_name",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Stripe.billing.MeterEventAdjustmentCreateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `MeterEventAdjustment.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Billing MeterEvent

<details><summary><code>client.billing.meterEvent.<a href="/src/api/resources/billing/resources/meterEvent/client/Client.ts">create</a>({ ...params }) -> Stripe.BillingMeterEvent</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Creates a billing meter event.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.billing.meterEvent.create({
    event_name: "event_name",
    payload: {
        key: "value",
    },
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Stripe.billing.MeterEventCreateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `MeterEvent.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Billing Meter

<details><summary><code>client.billing.meter.<a href="/src/api/resources/billing/resources/meter/client/Client.ts">list</a>({ ...params }) -> Stripe.MeterListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Retrieve a list of billing meters.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.billing.meter.list();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Stripe.billing.MeterListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Meter.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.billing.meter.<a href="/src/api/resources/billing/resources/meter/client/Client.ts">create</a>({ ...params }) -> Stripe.BillingMeter</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Creates a billing meter.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.billing.meter.create({
    default_aggregation: {
        formula: "count",
    },
    display_name: "display_name",
    event_name: "event_name",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Stripe.billing.MeterCreateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Meter.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.billing.meter.<a href="/src/api/resources/billing/resources/meter/client/Client.ts">retrieve</a>(id, { ...params }) -> Stripe.BillingMeter</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Retrieves a billing meter given an ID.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.billing.meter.retrieve("id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` — Unique identifier for the object.

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.billing.MeterRetrieveRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Meter.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.billing.meter.<a href="/src/api/resources/billing/resources/meter/client/Client.ts">update</a>(id, { ...params }) -> Stripe.BillingMeter</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Updates a billing meter.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.billing.meter.update("id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` — Unique identifier for the object.

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.billing.MeterUpdateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Meter.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.billing.meter.<a href="/src/api/resources/billing/resources/meter/client/Client.ts">deactivate</a>(id, { ...params }) -> Stripe.BillingMeter</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>When a meter is deactivated, no more meter events will be accepted for this meter. You can’t attach a deactivated meter to a price.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.billing.meter.deactivate("id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` — Unique identifier for the object.

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.billing.MeterDeactivateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Meter.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.billing.meter.<a href="/src/api/resources/billing/resources/meter/client/Client.ts">reactivate</a>(id, { ...params }) -> Stripe.BillingMeter</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>When a meter is reactivated, events for this meter can be accepted and you can attach the meter to a price.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.billing.meter.reactivate("id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` — Unique identifier for the object.

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.billing.MeterReactivateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Meter.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Billing MeterEventSummary

<details><summary><code>client.billing.meterEventSummary.<a href="/src/api/resources/billing/resources/meterEventSummary/client/Client.ts">list</a>(id, { ...params }) -> Stripe.MeterEventSummaryListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Retrieve a list of billing meter event summaries.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.billing.meterEventSummary.list("id", {
    customer: "customer",
    end_time: 1,
    start_time: 1,
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` — Unique identifier for the object.

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.billing.MeterEventSummaryListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `MeterEventSummary.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## BillingPortal Configuration

<details><summary><code>client.billingPortal.configuration.<a href="/src/api/resources/billingPortal/resources/configuration/client/Client.ts">list</a>({ ...params }) -> Stripe.ConfigurationListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Returns a list of configurations that describe the functionality of the customer portal.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.billingPortal.configuration.list();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Stripe.billingPortal.ConfigurationListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Configuration.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.billingPortal.configuration.<a href="/src/api/resources/billingPortal/resources/configuration/client/Client.ts">create</a>({ ...params }) -> Stripe.BillingPortalConfiguration</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Creates a configuration that describes the functionality and behavior of a PortalSession</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.billingPortal.configuration.create({
    features: {},
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Stripe.billingPortal.ConfigurationCreateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Configuration.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.billingPortal.configuration.<a href="/src/api/resources/billingPortal/resources/configuration/client/Client.ts">retrieve</a>(configuration, { ...params }) -> Stripe.BillingPortalConfiguration</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Retrieves a configuration that describes the functionality of the customer portal.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.billingPortal.configuration.retrieve("configuration");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**configuration:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.billingPortal.ConfigurationRetrieveRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Configuration.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.billingPortal.configuration.<a href="/src/api/resources/billingPortal/resources/configuration/client/Client.ts">update</a>(configuration, { ...params }) -> Stripe.BillingPortalConfiguration</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Updates a configuration that describes the functionality of the customer portal.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.billingPortal.configuration.update("configuration");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**configuration:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.billingPortal.ConfigurationUpdateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Configuration.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## BillingPortal Session

<details><summary><code>client.billingPortal.session.<a href="/src/api/resources/billingPortal/resources/session/client/Client.ts">create</a>({ ...params }) -> Stripe.BillingPortalSession</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Creates a session of the customer portal.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.billingPortal.session.create({
    customer: "customer",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Stripe.billingPortal.SessionCreateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Session.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Checkout Session

<details><summary><code>client.checkout.session.<a href="/src/api/resources/checkout/resources/session/client/Client.ts">list</a>({ ...params }) -> Stripe.SessionListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Returns a list of Checkout Sessions.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.checkout.session.list();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Stripe.checkout.SessionListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Session.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.checkout.session.<a href="/src/api/resources/checkout/resources/session/client/Client.ts">create</a>({ ...params }) -> Stripe.CheckoutSession</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Creates a Session object.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.checkout.session.create();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Stripe.checkout.SessionCreateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Session.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.checkout.session.<a href="/src/api/resources/checkout/resources/session/client/Client.ts">retrieve</a>(session, { ...params }) -> Stripe.CheckoutSession</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Retrieves a Session object.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.checkout.session.retrieve("session");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**session:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.checkout.SessionRetrieveRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Session.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.checkout.session.<a href="/src/api/resources/checkout/resources/session/client/Client.ts">update</a>(session, { ...params }) -> Stripe.CheckoutSession</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Updates a Session object.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.checkout.session.update("session");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**session:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.checkout.SessionUpdateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Session.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.checkout.session.<a href="/src/api/resources/checkout/resources/session/client/Client.ts">expire</a>(session, { ...params }) -> Stripe.CheckoutSession</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>A Session can be expired when it is in one of these statuses: <code>open</code> </p>

<p>After it expires, a customer can’t complete a Session and customers loading the Session see a message saying the Session is expired.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.checkout.session.expire("session");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**session:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.checkout.SessionExpireRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Session.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.checkout.session.<a href="/src/api/resources/checkout/resources/session/client/Client.ts">listLineItems</a>(session, { ...params }) -> Stripe.SessionListLineItemsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>When retrieving a Checkout Session, there is an includable <strong>line_items</strong> property containing the first handful of those items. There is also a URL where you can retrieve the full (paginated) list of line items.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.checkout.session.listLineItems("session");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**session:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.checkout.SessionListLineItemsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Session.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Climate Order

<details><summary><code>client.climate.order.<a href="/src/api/resources/climate/resources/order/client/Client.ts">list</a>({ ...params }) -> Stripe.OrderListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Lists all Climate order objects. The orders are returned sorted by creation date, with the
most recently created orders appearing first.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.climate.order.list();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Stripe.climate.OrderListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Order.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.climate.order.<a href="/src/api/resources/climate/resources/order/client/Client.ts">create</a>({ ...params }) -> Stripe.ClimateOrder</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Creates a Climate order object for a given Climate product. The order will be processed immediately
after creation and payment will be deducted your Stripe balance.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.climate.order.create({
    product: "product",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Stripe.climate.OrderCreateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Order.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.climate.order.<a href="/src/api/resources/climate/resources/order/client/Client.ts">retrieve</a>(order, { ...params }) -> Stripe.ClimateOrder</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Retrieves the details of a Climate order object with the given ID.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.climate.order.retrieve("order");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**order:** `string` — Unique identifier of the order.

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.climate.OrderRetrieveRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Order.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.climate.order.<a href="/src/api/resources/climate/resources/order/client/Client.ts">update</a>(order, { ...params }) -> Stripe.ClimateOrder</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Updates the specified order by setting the values of the parameters passed.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.climate.order.update("order");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**order:** `string` — Unique identifier of the order.

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.climate.OrderUpdateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Order.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.climate.order.<a href="/src/api/resources/climate/resources/order/client/Client.ts">cancel</a>(order, { ...params }) -> Stripe.ClimateOrder</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Cancels a Climate order. You can cancel an order within 24 hours of creation. Stripe refunds the
reservation <code>amount_subtotal</code>, but not the <code>amount_fees</code> for user-triggered cancellations. Frontier
might cancel reservations if suppliers fail to deliver. If Frontier cancels the reservation, Stripe
provides 90 days advance notice and refunds the <code>amount_total</code>.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.climate.order.cancel("order");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**order:** `string` — Unique identifier of the order.

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.climate.OrderCancelRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Order.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Climate Product

<details><summary><code>client.climate.product.<a href="/src/api/resources/climate/resources/product/client/Client.ts">list</a>({ ...params }) -> Stripe.ProductListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Lists all available Climate product objects.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.climate.product.list();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Stripe.climate.ProductListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Product.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.climate.product.<a href="/src/api/resources/climate/resources/product/client/Client.ts">retrieve</a>(product, { ...params }) -> Stripe.ClimateProduct</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Retrieves the details of a Climate product with the given ID.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.climate.product.retrieve("product");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**product:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.climate.ProductRetrieveRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Product.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Climate Supplier

<details><summary><code>client.climate.supplier.<a href="/src/api/resources/climate/resources/supplier/client/Client.ts">list</a>({ ...params }) -> Stripe.SupplierListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Lists all available Climate supplier objects.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.climate.supplier.list();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Stripe.climate.SupplierListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Supplier.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.climate.supplier.<a href="/src/api/resources/climate/resources/supplier/client/Client.ts">retrieve</a>(supplier, { ...params }) -> Stripe.ClimateSupplier</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Retrieves a Climate supplier object.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.climate.supplier.retrieve("supplier");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**supplier:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.climate.SupplierRetrieveRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Supplier.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Entitlements ActiveEntitlement

<details><summary><code>client.entitlements.activeEntitlement.<a href="/src/api/resources/entitlements/resources/activeEntitlement/client/Client.ts">list</a>({ ...params }) -> Stripe.ActiveEntitlementListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Retrieve a list of active entitlements for a customer</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.entitlements.activeEntitlement.list({
    customer: "customer",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Stripe.entitlements.ActiveEntitlementListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ActiveEntitlement.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.entitlements.activeEntitlement.<a href="/src/api/resources/entitlements/resources/activeEntitlement/client/Client.ts">retrieve</a>(id, { ...params }) -> Stripe.EntitlementsActiveEntitlement</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Retrieve an active entitlement</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.entitlements.activeEntitlement.retrieve("id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` — The ID of the entitlement.

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.entitlements.ActiveEntitlementRetrieveRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ActiveEntitlement.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Entitlements Feature

<details><summary><code>client.entitlements.feature.<a href="/src/api/resources/entitlements/resources/feature/client/Client.ts">list</a>({ ...params }) -> Stripe.FeatureListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Retrieve a list of features</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.entitlements.feature.list();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Stripe.entitlements.FeatureListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Feature.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.entitlements.feature.<a href="/src/api/resources/entitlements/resources/feature/client/Client.ts">create</a>({ ...params }) -> Stripe.EntitlementsFeature</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Creates a feature</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.entitlements.feature.create({
    lookup_key: "lookup_key",
    name: "name",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Stripe.entitlements.FeatureCreateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Feature.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.entitlements.feature.<a href="/src/api/resources/entitlements/resources/feature/client/Client.ts">retrieve</a>(id, { ...params }) -> Stripe.EntitlementsFeature</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Retrieves a feature</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.entitlements.feature.retrieve("id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` — The ID of the feature.

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.entitlements.FeatureRetrieveRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Feature.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.entitlements.feature.<a href="/src/api/resources/entitlements/resources/feature/client/Client.ts">update</a>(id, { ...params }) -> Stripe.EntitlementsFeature</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Update a feature’s metadata or permanently deactivate it.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.entitlements.feature.update("id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.entitlements.FeatureUpdateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Feature.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## FinancialConnections Account

<details><summary><code>client.financialConnections.account.<a href="/src/api/resources/financialConnections/resources/account/client/Client.ts">list</a>({ ...params }) -> Stripe.AccountListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Returns a list of Financial Connections <code>Account</code> objects.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.financialConnections.account.list();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Stripe.financialConnections.AccountListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Account.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.financialConnections.account.<a href="/src/api/resources/financialConnections/resources/account/client/Client.ts">retrieve</a>(account, { ...params }) -> Stripe.FinancialConnectionsAccount</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Retrieves the details of an Financial Connections <code>Account</code>.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.financialConnections.account.retrieve("account");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**account:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.financialConnections.AccountRetrieveRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Account.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.financialConnections.account.<a href="/src/api/resources/financialConnections/resources/account/client/Client.ts">disconnect</a>(account, { ...params }) -> Stripe.FinancialConnectionsAccount</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Disables your access to a Financial Connections <code>Account</code>. You will no longer be able to access data associated with the account (e.g. balances, transactions).</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.financialConnections.account.disconnect("account");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**account:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.financialConnections.AccountDisconnectRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Account.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.financialConnections.account.<a href="/src/api/resources/financialConnections/resources/account/client/Client.ts">listOwners</a>(account, { ...params }) -> Stripe.AccountListOwnersResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Lists all owners for a given <code>Account</code></p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.financialConnections.account.listOwners("account", {
    ownership: "ownership",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**account:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.financialConnections.AccountListOwnersRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Account.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.financialConnections.account.<a href="/src/api/resources/financialConnections/resources/account/client/Client.ts">refresh</a>(account, { ...params }) -> Stripe.FinancialConnectionsAccount</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Refreshes the data associated with a Financial Connections <code>Account</code>.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.financialConnections.account.refresh("account", {
    features: ["balance"],
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**account:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.financialConnections.AccountRefreshRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Account.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.financialConnections.account.<a href="/src/api/resources/financialConnections/resources/account/client/Client.ts">subscribe</a>(account, { ...params }) -> Stripe.FinancialConnectionsAccount</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Subscribes to periodic refreshes of data associated with a Financial Connections <code>Account</code>.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.financialConnections.account.subscribe("account", {
    features: ["transactions"],
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**account:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.financialConnections.AccountSubscribeRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Account.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.financialConnections.account.<a href="/src/api/resources/financialConnections/resources/account/client/Client.ts">unsubscribe</a>(account, { ...params }) -> Stripe.FinancialConnectionsAccount</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Unsubscribes from periodic refreshes of data associated with a Financial Connections <code>Account</code>.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.financialConnections.account.unsubscribe("account", {
    features: ["transactions"],
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**account:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.financialConnections.AccountUnsubscribeRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Account.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## FinancialConnections Session

<details><summary><code>client.financialConnections.session.<a href="/src/api/resources/financialConnections/resources/session/client/Client.ts">create</a>({ ...params }) -> Stripe.FinancialConnectionsSession</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>To launch the Financial Connections authorization flow, create a <code>Session</code>. The session’s <code>client_secret</code> can be used to launch the flow using Stripe.js.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.financialConnections.session.create({
    account_holder: {
        type: "account",
    },
    permissions: ["balances"],
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Stripe.financialConnections.SessionCreateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Session.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.financialConnections.session.<a href="/src/api/resources/financialConnections/resources/session/client/Client.ts">retrieve</a>(session, { ...params }) -> Stripe.FinancialConnectionsSession</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Retrieves the details of a Financial Connections <code>Session</code></p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.financialConnections.session.retrieve("session");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**session:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.financialConnections.SessionRetrieveRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Session.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## FinancialConnections Transaction

<details><summary><code>client.financialConnections.transaction.<a href="/src/api/resources/financialConnections/resources/transaction/client/Client.ts">list</a>({ ...params }) -> Stripe.TransactionListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Returns a list of Financial Connections <code>Transaction</code> objects.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.financialConnections.transaction.list({
    account: "account",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Stripe.financialConnections.TransactionListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Transaction.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.financialConnections.transaction.<a href="/src/api/resources/financialConnections/resources/transaction/client/Client.ts">retrieve</a>(transaction, { ...params }) -> Stripe.FinancialConnectionsTransaction</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Retrieves the details of a Financial Connections <code>Transaction</code></p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.financialConnections.transaction.retrieve("transaction");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**transaction:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.financialConnections.TransactionRetrieveRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Transaction.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Forwarding Request

<details><summary><code>client.forwarding.request.<a href="/src/api/resources/forwarding/resources/request/client/Client.ts">list</a>({ ...params }) -> Stripe.RequestListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Lists all ForwardingRequest objects.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.forwarding.request.list();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Stripe.forwarding.RequestListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Request.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.forwarding.request.<a href="/src/api/resources/forwarding/resources/request/client/Client.ts">create</a>({ ...params }) -> Stripe.ForwardingRequest</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Creates a ForwardingRequest object.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.forwarding.request.create({
    payment_method: "payment_method",
    replacements: ["card_cvc"],
    url: "url",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Stripe.forwarding.RequestCreateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Request.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.forwarding.request.<a href="/src/api/resources/forwarding/resources/request/client/Client.ts">retrieve</a>(id, { ...params }) -> Stripe.ForwardingRequest</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Retrieves a ForwardingRequest object.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.forwarding.request.retrieve("id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.forwarding.RequestRetrieveRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Request.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Identity VerificationReport

<details><summary><code>client.identity.verificationReport.<a href="/src/api/resources/identity/resources/verificationReport/client/Client.ts">list</a>({ ...params }) -> Stripe.VerificationReportListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>List all verification reports.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.identity.verificationReport.list();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Stripe.identity.VerificationReportListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `VerificationReport.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.identity.verificationReport.<a href="/src/api/resources/identity/resources/verificationReport/client/Client.ts">retrieve</a>(report, { ...params }) -> Stripe.IdentityVerificationReport</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Retrieves an existing VerificationReport</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.identity.verificationReport.retrieve("report");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**report:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.identity.VerificationReportRetrieveRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `VerificationReport.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Identity VerificationSession

<details><summary><code>client.identity.verificationSession.<a href="/src/api/resources/identity/resources/verificationSession/client/Client.ts">list</a>({ ...params }) -> Stripe.VerificationSessionListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Returns a list of VerificationSessions</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.identity.verificationSession.list();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Stripe.identity.VerificationSessionListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `VerificationSession.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.identity.verificationSession.<a href="/src/api/resources/identity/resources/verificationSession/client/Client.ts">create</a>({ ...params }) -> Stripe.IdentityVerificationSession</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Creates a VerificationSession object.</p>

<p>After the VerificationSession is created, display a verification modal using the session <code>client_secret</code> or send your users to the session’s <code>url</code>.</p>

<p>If your API key is in test mode, verification checks won’t actually process, though everything else will occur as if in live mode.</p>

<p>Related guide: <a href="/docs/identity/verify-identity-documents">Verify your users’ identity documents</a></p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.identity.verificationSession.create();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Stripe.identity.VerificationSessionCreateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `VerificationSession.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.identity.verificationSession.<a href="/src/api/resources/identity/resources/verificationSession/client/Client.ts">retrieve</a>(session, { ...params }) -> Stripe.IdentityVerificationSession</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Retrieves the details of a VerificationSession that was previously created.</p>

<p>When the session status is <code>requires_input</code>, you can use this method to retrieve a valid
<code>client_secret</code> or <code>url</code> to allow re-submission.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.identity.verificationSession.retrieve("session");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**session:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.identity.VerificationSessionRetrieveRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `VerificationSession.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.identity.verificationSession.<a href="/src/api/resources/identity/resources/verificationSession/client/Client.ts">update</a>(session, { ...params }) -> Stripe.IdentityVerificationSession</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Updates a VerificationSession object.</p>

<p>When the session status is <code>requires_input</code>, you can use this method to update the
verification check and options.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.identity.verificationSession.update("session");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**session:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.identity.VerificationSessionUpdateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `VerificationSession.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.identity.verificationSession.<a href="/src/api/resources/identity/resources/verificationSession/client/Client.ts">cancel</a>(session, { ...params }) -> Stripe.IdentityVerificationSession</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>A VerificationSession object can be canceled when it is in <code>requires_input</code> <a href="/docs/identity/how-sessions-work">status</a>.</p>

<p>Once canceled, future submission attempts are disabled. This cannot be undone. <a href="/docs/identity/verification-sessions#cancel">Learn more</a>.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.identity.verificationSession.cancel("session");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**session:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.identity.VerificationSessionCancelRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `VerificationSession.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.identity.verificationSession.<a href="/src/api/resources/identity/resources/verificationSession/client/Client.ts">redact</a>(session, { ...params }) -> Stripe.IdentityVerificationSession</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Redact a VerificationSession to remove all collected information from Stripe. This will redact
the VerificationSession and all objects related to it, including VerificationReports, Events,
request logs, etc.</p>

<p>A VerificationSession object can be redacted when it is in <code>requires_input</code> or <code>verified</code>
<a href="/docs/identity/how-sessions-work">status</a>. Redacting a VerificationSession in <code>requires_action</code>
state will automatically cancel it.</p>

<p>The redaction process may take up to four days. When the redaction process is in progress, the
VerificationSession’s <code>redaction.status</code> field will be set to <code>processing</code>; when the process is
finished, it will change to <code>redacted</code> and an <code>identity.verification_session.redacted</code> event
will be emitted.</p>

<p>Redaction is irreversible. Redacted objects are still accessible in the Stripe API, but all the
fields that contain personal data will be replaced by the string <code>[redacted]</code> or a similar
placeholder. The <code>metadata</code> field will also be erased. Redacted objects cannot be updated or
used for any purpose.</p>

<p><a href="/docs/identity/verification-sessions#redact">Learn more</a>.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.identity.verificationSession.redact("session");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**session:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.identity.VerificationSessionRedactRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `VerificationSession.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Issuing Authorization

<details><summary><code>client.issuing.authorization.<a href="/src/api/resources/issuing/resources/authorization/client/Client.ts">list</a>({ ...params }) -> Stripe.AuthorizationListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Returns a list of Issuing <code>Authorization</code> objects. The objects are sorted in descending order by creation date, with the most recently created object appearing first.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.issuing.authorization.list();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Stripe.issuing.AuthorizationListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Authorization.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.issuing.authorization.<a href="/src/api/resources/issuing/resources/authorization/client/Client.ts">retrieve</a>(authorization, { ...params }) -> Stripe.IssuingAuthorization</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Retrieves an Issuing <code>Authorization</code> object.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.issuing.authorization.retrieve("authorization");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**authorization:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.issuing.AuthorizationRetrieveRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Authorization.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.issuing.authorization.<a href="/src/api/resources/issuing/resources/authorization/client/Client.ts">update</a>(authorization, { ...params }) -> Stripe.IssuingAuthorization</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Updates the specified Issuing <code>Authorization</code> object by setting the values of the parameters passed. Any parameters not provided will be left unchanged.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.issuing.authorization.update("authorization");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**authorization:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.issuing.AuthorizationUpdateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Authorization.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.issuing.authorization.<a href="/src/api/resources/issuing/resources/authorization/client/Client.ts">approve</a>(authorization, { ...params }) -> Stripe.IssuingAuthorization</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>[Deprecated] Approves a pending Issuing <code>Authorization</code> object. This request should be made within the timeout window of the <a href="/docs/issuing/controls/real-time-authorizations">real-time authorization</a> flow. 
This method is deprecated. Instead, <a href="/docs/issuing/controls/real-time-authorizations#authorization-handling">respond directly to the webhook request to approve an authorization</a>.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.issuing.authorization.approve("authorization");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**authorization:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.issuing.AuthorizationApproveRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Authorization.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.issuing.authorization.<a href="/src/api/resources/issuing/resources/authorization/client/Client.ts">decline</a>(authorization, { ...params }) -> Stripe.IssuingAuthorization</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>[Deprecated] Declines a pending Issuing <code>Authorization</code> object. This request should be made within the timeout window of the <a href="/docs/issuing/controls/real-time-authorizations">real time authorization</a> flow.
This method is deprecated. Instead, <a href="/docs/issuing/controls/real-time-authorizations#authorization-handling">respond directly to the webhook request to decline an authorization</a>.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.issuing.authorization.decline("authorization");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**authorization:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.issuing.AuthorizationDeclineRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Authorization.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.issuing.authorization.<a href="/src/api/resources/issuing/resources/authorization/client/Client.ts">create</a>({ ...params }) -> Stripe.IssuingAuthorization</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Create a test-mode authorization.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.issuing.authorization.create({
    card: "card",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Stripe.issuing.AuthorizationCreateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Authorization.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.issuing.authorization.<a href="/src/api/resources/issuing/resources/authorization/client/Client.ts">capture</a>(authorization, { ...params }) -> Stripe.IssuingAuthorization</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Capture a test-mode authorization.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.issuing.authorization.capture("authorization");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**authorization:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.issuing.AuthorizationCaptureRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Authorization.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.issuing.authorization.<a href="/src/api/resources/issuing/resources/authorization/client/Client.ts">expire</a>(authorization, { ...params }) -> Stripe.IssuingAuthorization</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Expire a test-mode Authorization.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.issuing.authorization.expire("authorization");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**authorization:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.issuing.AuthorizationExpireRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Authorization.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.issuing.authorization.<a href="/src/api/resources/issuing/resources/authorization/client/Client.ts">finalizeAmount</a>(authorization, { ...params }) -> Stripe.IssuingAuthorization</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Finalize the amount on an Authorization prior to capture, when the initial authorization was for an estimated amount.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.issuing.authorization.finalizeAmount("authorization", {
    final_amount: 1,
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**authorization:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.issuing.AuthorizationFinalizeAmountRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Authorization.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.issuing.authorization.<a href="/src/api/resources/issuing/resources/authorization/client/Client.ts">respond</a>(authorization, { ...params }) -> Stripe.IssuingAuthorization</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Respond to a fraud challenge on a testmode Issuing authorization, simulating either a confirmation of fraud or a correction of legitimacy.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.issuing.authorization.respond("authorization", {
    confirmed: true,
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**authorization:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.issuing.AuthorizationRespondRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Authorization.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.issuing.authorization.<a href="/src/api/resources/issuing/resources/authorization/client/Client.ts">increment</a>(authorization, { ...params }) -> Stripe.IssuingAuthorization</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Increment a test-mode Authorization.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.issuing.authorization.increment("authorization", {
    increment_amount: 1,
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**authorization:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.issuing.AuthorizationIncrementRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Authorization.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.issuing.authorization.<a href="/src/api/resources/issuing/resources/authorization/client/Client.ts">reverse</a>(authorization, { ...params }) -> Stripe.IssuingAuthorization</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Reverse a test-mode Authorization.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.issuing.authorization.reverse("authorization");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**authorization:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.issuing.AuthorizationReverseRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Authorization.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Issuing Cardholder

<details><summary><code>client.issuing.cardholder.<a href="/src/api/resources/issuing/resources/cardholder/client/Client.ts">list</a>({ ...params }) -> Stripe.CardholderListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Returns a list of Issuing <code>Cardholder</code> objects. The objects are sorted in descending order by creation date, with the most recently created object appearing first.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.issuing.cardholder.list();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Stripe.issuing.CardholderListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Cardholder.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.issuing.cardholder.<a href="/src/api/resources/issuing/resources/cardholder/client/Client.ts">create</a>({ ...params }) -> Stripe.IssuingCardholder</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Creates a new Issuing <code>Cardholder</code> object that can be issued cards.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.issuing.cardholder.create({
    billing: {
        address: {
            city: "city",
            country: "country",
            line1: "line1",
            postal_code: "postal_code",
        },
    },
    name: "name",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Stripe.issuing.CardholderCreateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Cardholder.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.issuing.cardholder.<a href="/src/api/resources/issuing/resources/cardholder/client/Client.ts">retrieve</a>(cardholder, { ...params }) -> Stripe.IssuingCardholder</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Retrieves an Issuing <code>Cardholder</code> object.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.issuing.cardholder.retrieve("cardholder");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**cardholder:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.issuing.CardholderRetrieveRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Cardholder.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.issuing.cardholder.<a href="/src/api/resources/issuing/resources/cardholder/client/Client.ts">update</a>(cardholder, { ...params }) -> Stripe.IssuingCardholder</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Updates the specified Issuing <code>Cardholder</code> object by setting the values of the parameters passed. Any parameters not provided will be left unchanged.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.issuing.cardholder.update("cardholder");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**cardholder:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.issuing.CardholderUpdateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Cardholder.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Issuing Card

<details><summary><code>client.issuing.card.<a href="/src/api/resources/issuing/resources/card/client/Client.ts">list</a>({ ...params }) -> Stripe.CardListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Returns a list of Issuing <code>Card</code> objects. The objects are sorted in descending order by creation date, with the most recently created object appearing first.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.issuing.card.list();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Stripe.issuing.CardListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Card.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.issuing.card.<a href="/src/api/resources/issuing/resources/card/client/Client.ts">create</a>({ ...params }) -> Stripe.IssuingCard</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Creates an Issuing <code>Card</code> object.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.issuing.card.create({
    currency: "currency",
    type: "physical",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Stripe.issuing.CardCreateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Card.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.issuing.card.<a href="/src/api/resources/issuing/resources/card/client/Client.ts">retrieve</a>(card, { ...params }) -> Stripe.IssuingCard</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Retrieves an Issuing <code>Card</code> object.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.issuing.card.retrieve("card");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**card:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.issuing.CardRetrieveRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Card.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.issuing.card.<a href="/src/api/resources/issuing/resources/card/client/Client.ts">update</a>(card, { ...params }) -> Stripe.IssuingCard</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Updates the specified Issuing <code>Card</code> object by setting the values of the parameters passed. Any parameters not provided will be left unchanged.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.issuing.card.update("card");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**card:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.issuing.CardUpdateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Card.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.issuing.card.<a href="/src/api/resources/issuing/resources/card/client/Client.ts">deliverCard</a>(card, { ...params }) -> Stripe.IssuingCard</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Updates the shipping status of the specified Issuing <code>Card</code> object to <code>delivered</code>.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.issuing.card.deliverCard("card");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**card:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.issuing.CardDeliverCardRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Card.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.issuing.card.<a href="/src/api/resources/issuing/resources/card/client/Client.ts">failCard</a>(card, { ...params }) -> Stripe.IssuingCard</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Updates the shipping status of the specified Issuing <code>Card</code> object to <code>failure</code>.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.issuing.card.failCard("card");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**card:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.issuing.CardFailCardRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Card.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.issuing.card.<a href="/src/api/resources/issuing/resources/card/client/Client.ts">returnCard</a>(card, { ...params }) -> Stripe.IssuingCard</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Updates the shipping status of the specified Issuing <code>Card</code> object to <code>returned</code>.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.issuing.card.returnCard("card");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**card:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.issuing.CardReturnCardRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Card.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.issuing.card.<a href="/src/api/resources/issuing/resources/card/client/Client.ts">shipCard</a>(card, { ...params }) -> Stripe.IssuingCard</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Updates the shipping status of the specified Issuing <code>Card</code> object to <code>shipped</code>.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.issuing.card.shipCard("card");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**card:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.issuing.CardShipCardRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Card.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.issuing.card.<a href="/src/api/resources/issuing/resources/card/client/Client.ts">submitCard</a>(card, { ...params }) -> Stripe.IssuingCard</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Updates the shipping status of the specified Issuing <code>Card</code> object to <code>submitted</code>. This method requires Stripe Version ‘2024-09-30.acacia’ or later.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.issuing.card.submitCard("card");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**card:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.issuing.CardSubmitCardRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Card.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Issuing Dispute

<details><summary><code>client.issuing.dispute.<a href="/src/api/resources/issuing/resources/dispute/client/Client.ts">list</a>({ ...params }) -> Stripe.DisputeListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Returns a list of Issuing <code>Dispute</code> objects. The objects are sorted in descending order by creation date, with the most recently created object appearing first.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.issuing.dispute.list();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Stripe.issuing.DisputeListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Dispute.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.issuing.dispute.<a href="/src/api/resources/issuing/resources/dispute/client/Client.ts">create</a>({ ...params }) -> Stripe.IssuingDispute</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Creates an Issuing <code>Dispute</code> object. Individual pieces of evidence within the <code>evidence</code> object are optional at this point. Stripe only validates that required evidence is present during submission. Refer to <a href="/docs/issuing/purchases/disputes#dispute-reasons-and-evidence">Dispute reasons and evidence</a> for more details about evidence requirements.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.issuing.dispute.create();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Stripe.issuing.DisputeCreateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Dispute.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.issuing.dispute.<a href="/src/api/resources/issuing/resources/dispute/client/Client.ts">retrieve</a>(dispute, { ...params }) -> Stripe.IssuingDispute</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Retrieves an Issuing <code>Dispute</code> object.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.issuing.dispute.retrieve("dispute");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**dispute:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.issuing.DisputeRetrieveRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Dispute.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.issuing.dispute.<a href="/src/api/resources/issuing/resources/dispute/client/Client.ts">update</a>(dispute, { ...params }) -> Stripe.IssuingDispute</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Updates the specified Issuing <code>Dispute</code> object by setting the values of the parameters passed. Any parameters not provided will be left unchanged. Properties on the <code>evidence</code> object can be unset by passing in an empty string.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.issuing.dispute.update("dispute");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**dispute:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.issuing.DisputeUpdateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Dispute.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.issuing.dispute.<a href="/src/api/resources/issuing/resources/dispute/client/Client.ts">submit</a>(dispute, { ...params }) -> Stripe.IssuingDispute</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Submits an Issuing <code>Dispute</code> to the card network. Stripe validates that all evidence fields required for the dispute’s reason are present. For more details, see <a href="/docs/issuing/purchases/disputes#dispute-reasons-and-evidence">Dispute reasons and evidence</a>.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.issuing.dispute.submit("dispute");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**dispute:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.issuing.DisputeSubmitRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Dispute.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Issuing PersonalizationDesign

<details><summary><code>client.issuing.personalizationDesign.<a href="/src/api/resources/issuing/resources/personalizationDesign/client/Client.ts">list</a>({ ...params }) -> Stripe.PersonalizationDesignListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Returns a list of personalization design objects. The objects are sorted in descending order by creation date, with the most recently created object appearing first.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.issuing.personalizationDesign.list();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Stripe.issuing.PersonalizationDesignListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PersonalizationDesign.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.issuing.personalizationDesign.<a href="/src/api/resources/issuing/resources/personalizationDesign/client/Client.ts">create</a>({ ...params }) -> Stripe.IssuingPersonalizationDesign</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Creates a personalization design object.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.issuing.personalizationDesign.create({
    physical_bundle: "physical_bundle",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Stripe.issuing.PersonalizationDesignCreateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PersonalizationDesign.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.issuing.personalizationDesign.<a href="/src/api/resources/issuing/resources/personalizationDesign/client/Client.ts">retrieve</a>(personalizationDesign, { ...params }) -> Stripe.IssuingPersonalizationDesign</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Retrieves a personalization design object.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.issuing.personalizationDesign.retrieve("personalization_design");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**personalizationDesign:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.issuing.PersonalizationDesignRetrieveRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PersonalizationDesign.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.issuing.personalizationDesign.<a href="/src/api/resources/issuing/resources/personalizationDesign/client/Client.ts">update</a>(personalizationDesign, { ...params }) -> Stripe.IssuingPersonalizationDesign</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Updates a card personalization object.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.issuing.personalizationDesign.update("personalization_design");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**personalizationDesign:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.issuing.PersonalizationDesignUpdateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PersonalizationDesign.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.issuing.personalizationDesign.<a href="/src/api/resources/issuing/resources/personalizationDesign/client/Client.ts">activate</a>(personalizationDesign, { ...params }) -> Stripe.IssuingPersonalizationDesign</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Updates the <code>status</code> of the specified testmode personalization design object to <code>active</code>.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.issuing.personalizationDesign.activate("personalization_design");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**personalizationDesign:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.issuing.PersonalizationDesignActivateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PersonalizationDesign.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.issuing.personalizationDesign.<a href="/src/api/resources/issuing/resources/personalizationDesign/client/Client.ts">deactivate</a>(personalizationDesign, { ...params }) -> Stripe.IssuingPersonalizationDesign</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Updates the <code>status</code> of the specified testmode personalization design object to <code>inactive</code>.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.issuing.personalizationDesign.deactivate("personalization_design");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**personalizationDesign:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.issuing.PersonalizationDesignDeactivateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PersonalizationDesign.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.issuing.personalizationDesign.<a href="/src/api/resources/issuing/resources/personalizationDesign/client/Client.ts">reject</a>(personalizationDesign, { ...params }) -> Stripe.IssuingPersonalizationDesign</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Updates the <code>status</code> of the specified testmode personalization design object to <code>rejected</code>.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.issuing.personalizationDesign.reject("personalization_design", {
    rejection_reasons: {},
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**personalizationDesign:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.issuing.PersonalizationDesignRejectRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PersonalizationDesign.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Issuing PhysicalBundle

<details><summary><code>client.issuing.physicalBundle.<a href="/src/api/resources/issuing/resources/physicalBundle/client/Client.ts">list</a>({ ...params }) -> Stripe.PhysicalBundleListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Returns a list of physical bundle objects. The objects are sorted in descending order by creation date, with the most recently created object appearing first.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.issuing.physicalBundle.list();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Stripe.issuing.PhysicalBundleListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PhysicalBundle.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.issuing.physicalBundle.<a href="/src/api/resources/issuing/resources/physicalBundle/client/Client.ts">retrieve</a>(physicalBundle, { ...params }) -> Stripe.IssuingPhysicalBundle</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Retrieves a physical bundle object.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.issuing.physicalBundle.retrieve("physical_bundle");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**physicalBundle:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.issuing.PhysicalBundleRetrieveRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PhysicalBundle.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Issuing Token

<details><summary><code>client.issuing.token.<a href="/src/api/resources/issuing/resources/token/client/Client.ts">list</a>({ ...params }) -> Stripe.TokenListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Lists all Issuing <code>Token</code> objects for a given card.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.issuing.token.list({
    card: "card",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Stripe.issuing.TokenListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Token.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.issuing.token.<a href="/src/api/resources/issuing/resources/token/client/Client.ts">retrieve</a>(token, { ...params }) -> Stripe.IssuingToken</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Retrieves an Issuing <code>Token</code> object.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.issuing.token.retrieve("token");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**token:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.issuing.TokenRetrieveRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Token.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.issuing.token.<a href="/src/api/resources/issuing/resources/token/client/Client.ts">update</a>(token, { ...params }) -> Stripe.IssuingToken</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Attempts to update the specified Issuing <code>Token</code> object to the status specified.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.issuing.token.update("token", {
    status: "active",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**token:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.issuing.TokenUpdateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Token.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Issuing Transaction

<details><summary><code>client.issuing.transaction.<a href="/src/api/resources/issuing/resources/transaction/client/Client.ts">list</a>({ ...params }) -> Stripe.TransactionListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Returns a list of Issuing <code>Transaction</code> objects. The objects are sorted in descending order by creation date, with the most recently created object appearing first.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.issuing.transaction.list();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Stripe.issuing.TransactionListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Transaction.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.issuing.transaction.<a href="/src/api/resources/issuing/resources/transaction/client/Client.ts">retrieve</a>(transaction, { ...params }) -> Stripe.IssuingTransaction</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Retrieves an Issuing <code>Transaction</code> object.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.issuing.transaction.retrieve("transaction");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**transaction:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.issuing.TransactionRetrieveRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Transaction.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.issuing.transaction.<a href="/src/api/resources/issuing/resources/transaction/client/Client.ts">update</a>(transaction, { ...params }) -> Stripe.IssuingTransaction</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Updates the specified Issuing <code>Transaction</code> object by setting the values of the parameters passed. Any parameters not provided will be left unchanged.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.issuing.transaction.update("transaction");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**transaction:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.issuing.TransactionUpdateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Transaction.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.issuing.transaction.<a href="/src/api/resources/issuing/resources/transaction/client/Client.ts">createForceCapture</a>({ ...params }) -> Stripe.IssuingTransaction</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Allows the user to capture an arbitrary amount, also known as a forced capture.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.issuing.transaction.createForceCapture({
    amount: 1,
    card: "card",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Stripe.issuing.TransactionCreateForceCaptureRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Transaction.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.issuing.transaction.<a href="/src/api/resources/issuing/resources/transaction/client/Client.ts">createUnlinkedRefund</a>({ ...params }) -> Stripe.IssuingTransaction</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Allows the user to refund an arbitrary amount, also known as a unlinked refund.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.issuing.transaction.createUnlinkedRefund({
    amount: 1,
    card: "card",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Stripe.issuing.TransactionCreateUnlinkedRefundRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Transaction.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.issuing.transaction.<a href="/src/api/resources/issuing/resources/transaction/client/Client.ts">refund</a>(transaction, { ...params }) -> Stripe.IssuingTransaction</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Refund a test-mode Transaction.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.issuing.transaction.refund("transaction");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**transaction:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.issuing.TransactionRefundRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Transaction.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Radar EarlyFraudWarning

<details><summary><code>client.radar.earlyFraudWarning.<a href="/src/api/resources/radar/resources/earlyFraudWarning/client/Client.ts">list</a>({ ...params }) -> Stripe.EarlyFraudWarningListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Returns a list of early fraud warnings.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.radar.earlyFraudWarning.list();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Stripe.radar.EarlyFraudWarningListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EarlyFraudWarning.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.radar.earlyFraudWarning.<a href="/src/api/resources/radar/resources/earlyFraudWarning/client/Client.ts">retrieve</a>(earlyFraudWarning, { ...params }) -> Stripe.RadarEarlyFraudWarning</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Retrieves the details of an early fraud warning that has previously been created. </p>

<p>Please refer to the <a href="#early_fraud_warning_object">early fraud warning</a> object reference for more details.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.radar.earlyFraudWarning.retrieve("early_fraud_warning");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**earlyFraudWarning:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.radar.EarlyFraudWarningRetrieveRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EarlyFraudWarning.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Radar ValueListItem

<details><summary><code>client.radar.valueListItem.<a href="/src/api/resources/radar/resources/valueListItem/client/Client.ts">list</a>({ ...params }) -> Stripe.ValueListItemListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Returns a list of <code>ValueListItem</code> objects. The objects are sorted in descending order by creation date, with the most recently created object appearing first.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.radar.valueListItem.list({
    value_list: "value_list",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Stripe.radar.ValueListItemListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ValueListItem.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.radar.valueListItem.<a href="/src/api/resources/radar/resources/valueListItem/client/Client.ts">create</a>({ ...params }) -> Stripe.RadarValueListItem</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Creates a new <code>ValueListItem</code> object, which is added to the specified parent value list.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.radar.valueListItem.create({
    value: "value",
    value_list: "value_list",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Stripe.radar.ValueListItemCreateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ValueListItem.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.radar.valueListItem.<a href="/src/api/resources/radar/resources/valueListItem/client/Client.ts">retrieve</a>(item, { ...params }) -> Stripe.RadarValueListItem</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Retrieves a <code>ValueListItem</code> object.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.radar.valueListItem.retrieve("item");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**item:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.radar.ValueListItemRetrieveRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ValueListItem.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.radar.valueListItem.<a href="/src/api/resources/radar/resources/valueListItem/client/Client.ts">delete</a>(item, { ...params }) -> Stripe.DeletedRadarValueListItem</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Deletes a <code>ValueListItem</code> object, removing it from its parent value list.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.radar.valueListItem.delete("item");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**item:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.radar.ValueListItemDeleteRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ValueListItem.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Radar ValueList

<details><summary><code>client.radar.valueList.<a href="/src/api/resources/radar/resources/valueList/client/Client.ts">list</a>({ ...params }) -> Stripe.ValueListListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Returns a list of <code>ValueList</code> objects. The objects are sorted in descending order by creation date, with the most recently created object appearing first.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.radar.valueList.list();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Stripe.radar.ValueListListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ValueList.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.radar.valueList.<a href="/src/api/resources/radar/resources/valueList/client/Client.ts">create</a>({ ...params }) -> Stripe.RadarValueList</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Creates a new <code>ValueList</code> object, which can then be referenced in rules.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.radar.valueList.create({
    alias: "alias",
    name: "name",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Stripe.radar.ValueListCreateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ValueList.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.radar.valueList.<a href="/src/api/resources/radar/resources/valueList/client/Client.ts">retrieve</a>(valueList, { ...params }) -> Stripe.RadarValueList</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Retrieves a <code>ValueList</code> object.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.radar.valueList.retrieve("value_list");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**valueList:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.radar.ValueListRetrieveRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ValueList.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.radar.valueList.<a href="/src/api/resources/radar/resources/valueList/client/Client.ts">update</a>(valueList, { ...params }) -> Stripe.RadarValueList</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Updates a <code>ValueList</code> object by setting the values of the parameters passed. Any parameters not provided will be left unchanged. Note that <code>item_type</code> is immutable.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.radar.valueList.update("value_list");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**valueList:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.radar.ValueListUpdateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ValueList.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.radar.valueList.<a href="/src/api/resources/radar/resources/valueList/client/Client.ts">delete</a>(valueList, { ...params }) -> Stripe.DeletedRadarValueList</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Deletes a <code>ValueList</code> object, also deleting any items contained within the value list. To be deleted, a value list must not be referenced in any rules.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.radar.valueList.delete("value_list");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**valueList:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.radar.ValueListDeleteRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ValueList.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Reporting ReportRun

<details><summary><code>client.reporting.reportRun.<a href="/src/api/resources/reporting/resources/reportRun/client/Client.ts">list</a>({ ...params }) -> Stripe.ReportRunListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Returns a list of Report Runs, with the most recent appearing first.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.reporting.reportRun.list();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Stripe.reporting.ReportRunListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ReportRun.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.reporting.reportRun.<a href="/src/api/resources/reporting/resources/reportRun/client/Client.ts">create</a>({ ...params }) -> Stripe.ReportingReportRun</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Creates a new object and begin running the report. (Certain report types require a <a href="https://stripe.com/docs/keys#test-live-modes">live-mode API key</a>.)</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.reporting.reportRun.create({
    report_type: "report_type",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Stripe.reporting.ReportRunCreateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ReportRun.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.reporting.reportRun.<a href="/src/api/resources/reporting/resources/reportRun/client/Client.ts">retrieve</a>(reportRun, { ...params }) -> Stripe.ReportingReportRun</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Retrieves the details of an existing Report Run.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.reporting.reportRun.retrieve("report_run");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**reportRun:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.reporting.ReportRunRetrieveRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ReportRun.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Reporting ReportType

<details><summary><code>client.reporting.reportType.<a href="/src/api/resources/reporting/resources/reportType/client/Client.ts">list</a>({ ...params }) -> Stripe.ReportTypeListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Returns a full list of Report Types.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.reporting.reportType.list();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Stripe.reporting.ReportTypeListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ReportType.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.reporting.reportType.<a href="/src/api/resources/reporting/resources/reportType/client/Client.ts">retrieve</a>(reportType, { ...params }) -> Stripe.ReportingReportType</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Retrieves the details of a Report Type. (Certain report types require a <a href="https://stripe.com/docs/keys#test-live-modes">live-mode API key</a>.)</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.reporting.reportType.retrieve("report_type");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**reportType:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.reporting.ReportTypeRetrieveRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ReportType.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Tax Calculation

<details><summary><code>client.tax.calculation.<a href="/src/api/resources/tax/resources/calculation/client/Client.ts">create</a>({ ...params }) -> Stripe.TaxCalculation</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Calculates tax based on the input and returns a Tax <code>Calculation</code> object.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tax.calculation.create({
    currency: "currency",
    line_items: [
        {
            amount: 1,
        },
    ],
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Stripe.tax.CalculationCreateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Calculation.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.tax.calculation.<a href="/src/api/resources/tax/resources/calculation/client/Client.ts">retrieve</a>(calculation, { ...params }) -> Stripe.TaxCalculation</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Retrieves a Tax <code>Calculation</code> object, if the calculation hasn’t expired.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tax.calculation.retrieve("calculation");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**calculation:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.tax.CalculationRetrieveRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Calculation.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.tax.calculation.<a href="/src/api/resources/tax/resources/calculation/client/Client.ts">listLineItems</a>(calculation, { ...params }) -> Stripe.CalculationListLineItemsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Retrieves the line items of a tax calculation as a collection, if the calculation hasn’t expired.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tax.calculation.listLineItems("calculation");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**calculation:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.tax.CalculationListLineItemsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Calculation.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Tax Registration

<details><summary><code>client.tax.registration.<a href="/src/api/resources/tax/resources/registration/client/Client.ts">list</a>({ ...params }) -> Stripe.RegistrationListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Returns a list of Tax <code>Registration</code> objects.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tax.registration.list();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Stripe.tax.RegistrationListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Registration.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.tax.registration.<a href="/src/api/resources/tax/resources/registration/client/Client.ts">create</a>({ ...params }) -> Stripe.TaxRegistration</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Creates a new Tax <code>Registration</code> object.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tax.registration.create({
    active_from: "now",
    country: "country",
    country_options: {},
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Stripe.tax.RegistrationCreateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Registration.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.tax.registration.<a href="/src/api/resources/tax/resources/registration/client/Client.ts">retrieve</a>(id, { ...params }) -> Stripe.TaxRegistration</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Returns a Tax <code>Registration</code> object.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tax.registration.retrieve("id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.tax.RegistrationRetrieveRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Registration.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.tax.registration.<a href="/src/api/resources/tax/resources/registration/client/Client.ts">update</a>(id, { ...params }) -> Stripe.TaxRegistration</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Updates an existing Tax <code>Registration</code> object.</p>

<p>A registration cannot be deleted after it has been created. If you wish to end a registration you may do so by setting <code>expires_at</code>.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tax.registration.update("id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.tax.RegistrationUpdateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Registration.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Tax Settings

<details><summary><code>client.tax.settings.<a href="/src/api/resources/tax/resources/settings/client/Client.ts">retrieve</a>({ ...params }) -> Stripe.TaxSettings</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Retrieves Tax <code>Settings</code> for a merchant.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tax.settings.retrieve();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Stripe.tax.SettingsRetrieveRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Settings.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.tax.settings.<a href="/src/api/resources/tax/resources/settings/client/Client.ts">update</a>({ ...params }) -> Stripe.TaxSettings</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Updates Tax <code>Settings</code> parameters used in tax calculations. All parameters are editable but none can be removed once set.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tax.settings.update();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Stripe.tax.SettingsUpdateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Settings.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Tax Transaction

<details><summary><code>client.tax.transaction.<a href="/src/api/resources/tax/resources/transaction/client/Client.ts">createFromCalculation</a>({ ...params }) -> Stripe.TaxTransaction</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Creates a Tax Transaction from a calculation, if that calculation hasn’t expired. Calculations expire after 90 days.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tax.transaction.createFromCalculation({
    calculation: "calculation",
    reference: "reference",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Stripe.tax.TransactionCreateFromCalculationRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Transaction.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.tax.transaction.<a href="/src/api/resources/tax/resources/transaction/client/Client.ts">createReversal</a>({ ...params }) -> Stripe.TaxTransaction</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Partially or fully reverses a previously created <code>Transaction</code>.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tax.transaction.createReversal({
    mode: "full",
    original_transaction: "original_transaction",
    reference: "reference",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Stripe.tax.TransactionCreateReversalRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Transaction.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.tax.transaction.<a href="/src/api/resources/tax/resources/transaction/client/Client.ts">retrieve</a>(transaction, { ...params }) -> Stripe.TaxTransaction</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Retrieves a Tax <code>Transaction</code> object.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tax.transaction.retrieve("transaction");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**transaction:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.tax.TransactionRetrieveRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Transaction.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.tax.transaction.<a href="/src/api/resources/tax/resources/transaction/client/Client.ts">listLineItems</a>(transaction, { ...params }) -> Stripe.TransactionListLineItemsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Retrieves the line items of a committed standalone transaction as a collection.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tax.transaction.listLineItems("transaction");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**transaction:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.tax.TransactionListLineItemsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Transaction.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Terminal Configuration

<details><summary><code>client.terminal.configuration.<a href="/src/api/resources/terminal/resources/configuration/client/Client.ts">list</a>({ ...params }) -> Stripe.ConfigurationListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Returns a list of <code>Configuration</code> objects.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.terminal.configuration.list();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Stripe.terminal.ConfigurationListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Configuration.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.terminal.configuration.<a href="/src/api/resources/terminal/resources/configuration/client/Client.ts">create</a>({ ...params }) -> Stripe.TerminalConfiguration</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Creates a new <code>Configuration</code> object.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.terminal.configuration.create();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Stripe.terminal.ConfigurationCreateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Configuration.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.terminal.configuration.<a href="/src/api/resources/terminal/resources/configuration/client/Client.ts">retrieve</a>(configuration, { ...params }) -> Stripe.ConfigurationRetrieveResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Retrieves a <code>Configuration</code> object.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.terminal.configuration.retrieve("configuration");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**configuration:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.terminal.ConfigurationRetrieveRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Configuration.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.terminal.configuration.<a href="/src/api/resources/terminal/resources/configuration/client/Client.ts">update</a>(configuration, { ...params }) -> Stripe.ConfigurationUpdateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Updates a new <code>Configuration</code> object.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.terminal.configuration.update("configuration");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**configuration:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.terminal.ConfigurationUpdateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Configuration.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.terminal.configuration.<a href="/src/api/resources/terminal/resources/configuration/client/Client.ts">delete</a>(configuration, { ...params }) -> Stripe.DeletedTerminalConfiguration</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Deletes a <code>Configuration</code> object.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.terminal.configuration.delete("configuration");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**configuration:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.terminal.ConfigurationDeleteRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Configuration.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Terminal ConnectionToken

<details><summary><code>client.terminal.connectionToken.<a href="/src/api/resources/terminal/resources/connectionToken/client/Client.ts">create</a>({ ...params }) -> Stripe.TerminalConnectionToken</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>To connect to a reader the Stripe Terminal SDK needs to retrieve a short-lived connection token from Stripe, proxied through your server. On your backend, add an endpoint that creates and returns a connection token.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.terminal.connectionToken.create();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Stripe.terminal.ConnectionTokenCreateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ConnectionToken.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Terminal Location

<details><summary><code>client.terminal.location.<a href="/src/api/resources/terminal/resources/location/client/Client.ts">list</a>({ ...params }) -> Stripe.LocationListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Returns a list of <code>Location</code> objects.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.terminal.location.list();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Stripe.terminal.LocationListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Location.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.terminal.location.<a href="/src/api/resources/terminal/resources/location/client/Client.ts">create</a>({ ...params }) -> Stripe.TerminalLocation</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Creates a new <code>Location</code> object.
For further details, including which address fields are required in each country, see the <a href="/docs/terminal/fleet/locations">Manage locations</a> guide.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.terminal.location.create({
    address: {
        country: "country",
    },
    display_name: "display_name",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Stripe.terminal.LocationCreateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Location.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.terminal.location.<a href="/src/api/resources/terminal/resources/location/client/Client.ts">retrieve</a>(location, { ...params }) -> Stripe.LocationRetrieveResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Retrieves a <code>Location</code> object.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.terminal.location.retrieve("location");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**location:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.terminal.LocationRetrieveRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Location.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.terminal.location.<a href="/src/api/resources/terminal/resources/location/client/Client.ts">update</a>(location, { ...params }) -> Stripe.LocationUpdateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Updates a <code>Location</code> object by setting the values of the parameters passed. Any parameters not provided will be left unchanged.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.terminal.location.update("location");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**location:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.terminal.LocationUpdateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Location.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.terminal.location.<a href="/src/api/resources/terminal/resources/location/client/Client.ts">delete</a>(location, { ...params }) -> Stripe.DeletedTerminalLocation</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Deletes a <code>Location</code> object.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.terminal.location.delete("location");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**location:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.terminal.LocationDeleteRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Location.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Terminal Reader

<details><summary><code>client.terminal.reader.<a href="/src/api/resources/terminal/resources/reader/client/Client.ts">list</a>({ ...params }) -> Stripe.ReaderListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Returns a list of <code>Reader</code> objects.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.terminal.reader.list();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Stripe.terminal.ReaderListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Reader.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.terminal.reader.<a href="/src/api/resources/terminal/resources/reader/client/Client.ts">create</a>({ ...params }) -> Stripe.TerminalReader</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Creates a new <code>Reader</code> object.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.terminal.reader.create({
    registration_code: "registration_code",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Stripe.terminal.ReaderCreateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Reader.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.terminal.reader.<a href="/src/api/resources/terminal/resources/reader/client/Client.ts">retrieve</a>(reader, { ...params }) -> Stripe.ReaderRetrieveResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Retrieves a <code>Reader</code> object.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.terminal.reader.retrieve("reader");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**reader:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.terminal.ReaderRetrieveRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Reader.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.terminal.reader.<a href="/src/api/resources/terminal/resources/reader/client/Client.ts">update</a>(reader, { ...params }) -> Stripe.ReaderUpdateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Updates a <code>Reader</code> object by setting the values of the parameters passed. Any parameters not provided will be left unchanged.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.terminal.reader.update("reader");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**reader:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.terminal.ReaderUpdateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Reader.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.terminal.reader.<a href="/src/api/resources/terminal/resources/reader/client/Client.ts">delete</a>(reader, { ...params }) -> Stripe.DeletedTerminalReader</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Deletes a <code>Reader</code> object.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.terminal.reader.delete("reader");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**reader:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.terminal.ReaderDeleteRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Reader.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.terminal.reader.<a href="/src/api/resources/terminal/resources/reader/client/Client.ts">cancelAction</a>(reader, { ...params }) -> Stripe.TerminalReader</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Cancels the current reader action.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.terminal.reader.cancelAction("reader");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**reader:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.terminal.ReaderCancelActionRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Reader.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.terminal.reader.<a href="/src/api/resources/terminal/resources/reader/client/Client.ts">processPaymentIntent</a>(reader, { ...params }) -> Stripe.TerminalReader</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Initiates a payment flow on a Reader.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.terminal.reader.processPaymentIntent("reader", {
    payment_intent: "payment_intent",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**reader:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.terminal.ReaderProcessPaymentIntentRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Reader.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.terminal.reader.<a href="/src/api/resources/terminal/resources/reader/client/Client.ts">processSetupIntent</a>(reader, { ...params }) -> Stripe.TerminalReader</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Initiates a setup intent flow on a Reader.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.terminal.reader.processSetupIntent("reader", {
    allow_redisplay: "always",
    setup_intent: "setup_intent",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**reader:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.terminal.ReaderProcessSetupIntentRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Reader.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.terminal.reader.<a href="/src/api/resources/terminal/resources/reader/client/Client.ts">refundPayment</a>(reader, { ...params }) -> Stripe.TerminalReader</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Initiates a refund on a Reader</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.terminal.reader.refundPayment("reader");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**reader:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.terminal.ReaderRefundPaymentRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Reader.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.terminal.reader.<a href="/src/api/resources/terminal/resources/reader/client/Client.ts">setReaderDisplay</a>(reader, { ...params }) -> Stripe.TerminalReader</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Sets reader display to show cart details.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.terminal.reader.setReaderDisplay("reader", {});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**reader:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.terminal.ReaderSetReaderDisplayRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Reader.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.terminal.reader.<a href="/src/api/resources/terminal/resources/reader/client/Client.ts">presentPaymentMethod</a>(reader, { ...params }) -> Stripe.TerminalReader</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Presents a payment method on a simulated reader. Can be used to simulate accepting a payment, saving a card or refunding a transaction.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.terminal.reader.presentPaymentMethod("reader");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**reader:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.terminal.ReaderPresentPaymentMethodRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Reader.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## TestHelpers TestClock

<details><summary><code>client.testHelpers.testClock.<a href="/src/api/resources/testHelpers/resources/testClock/client/Client.ts">list</a>({ ...params }) -> Stripe.TestClockListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Returns a list of your test clocks.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.testHelpers.testClock.list();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Stripe.testHelpers.TestClockListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TestClock.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.testHelpers.testClock.<a href="/src/api/resources/testHelpers/resources/testClock/client/Client.ts">create</a>({ ...params }) -> Stripe.TestHelpersTestClock</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Creates a new test clock that can be attached to new customers and quotes.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.testHelpers.testClock.create({
    frozen_time: 1,
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Stripe.testHelpers.TestClockCreateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TestClock.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.testHelpers.testClock.<a href="/src/api/resources/testHelpers/resources/testClock/client/Client.ts">retrieve</a>(testClock, { ...params }) -> Stripe.TestHelpersTestClock</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Retrieves a test clock.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.testHelpers.testClock.retrieve("test_clock");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**testClock:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.testHelpers.TestClockRetrieveRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TestClock.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.testHelpers.testClock.<a href="/src/api/resources/testHelpers/resources/testClock/client/Client.ts">delete</a>(testClock, { ...params }) -> Stripe.DeletedTestHelpersTestClock</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Deletes a test clock.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.testHelpers.testClock.delete("test_clock");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**testClock:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.testHelpers.TestClockDeleteRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TestClock.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.testHelpers.testClock.<a href="/src/api/resources/testHelpers/resources/testClock/client/Client.ts">advance</a>(testClock, { ...params }) -> Stripe.TestHelpersTestClock</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Starts advancing a test clock to a specified time in the future. Advancement is done when status changes to <code>Ready</code>.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.testHelpers.testClock.advance("test_clock", {
    frozen_time: 1,
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**testClock:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.testHelpers.TestClockAdvanceRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TestClock.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Treasury InboundTransfer

<details><summary><code>client.treasury.inboundTransfer.<a href="/src/api/resources/treasury/resources/inboundTransfer/client/Client.ts">fail</a>(id, { ...params }) -> Stripe.TreasuryInboundTransfer</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Transitions a test mode created InboundTransfer to the <code>failed</code> status. The InboundTransfer must already be in the <code>processing</code> state.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.treasury.inboundTransfer.fail("id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.treasury.InboundTransferFailRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `InboundTransfer.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.treasury.inboundTransfer.<a href="/src/api/resources/treasury/resources/inboundTransfer/client/Client.ts">returnInboundTransfer</a>(id, { ...params }) -> Stripe.TreasuryInboundTransfer</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Marks the test mode InboundTransfer object as returned and links the InboundTransfer to a ReceivedDebit. The InboundTransfer must already be in the <code>succeeded</code> state.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.treasury.inboundTransfer.returnInboundTransfer("id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.treasury.InboundTransferReturnInboundTransferRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `InboundTransfer.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.treasury.inboundTransfer.<a href="/src/api/resources/treasury/resources/inboundTransfer/client/Client.ts">succeed</a>(id, { ...params }) -> Stripe.TreasuryInboundTransfer</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Transitions a test mode created InboundTransfer to the <code>succeeded</code> status. The InboundTransfer must already be in the <code>processing</code> state.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.treasury.inboundTransfer.succeed("id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.treasury.InboundTransferSucceedRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `InboundTransfer.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.treasury.inboundTransfer.<a href="/src/api/resources/treasury/resources/inboundTransfer/client/Client.ts">list</a>({ ...params }) -> Stripe.InboundTransferListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Returns a list of InboundTransfers sent from the specified FinancialAccount.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.treasury.inboundTransfer.list({
    financial_account: "financial_account",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Stripe.treasury.InboundTransferListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `InboundTransfer.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.treasury.inboundTransfer.<a href="/src/api/resources/treasury/resources/inboundTransfer/client/Client.ts">create</a>({ ...params }) -> Stripe.TreasuryInboundTransfer</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Creates an InboundTransfer.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.treasury.inboundTransfer.create({
    amount: 1,
    currency: "currency",
    financial_account: "financial_account",
    origin_payment_method: "origin_payment_method",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Stripe.treasury.InboundTransferCreateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `InboundTransfer.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.treasury.inboundTransfer.<a href="/src/api/resources/treasury/resources/inboundTransfer/client/Client.ts">retrieve</a>(id, { ...params }) -> Stripe.TreasuryInboundTransfer</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Retrieves the details of an existing InboundTransfer.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.treasury.inboundTransfer.retrieve("id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.treasury.InboundTransferRetrieveRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `InboundTransfer.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.treasury.inboundTransfer.<a href="/src/api/resources/treasury/resources/inboundTransfer/client/Client.ts">cancel</a>(inboundTransfer, { ...params }) -> Stripe.TreasuryInboundTransfer</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Cancels an InboundTransfer.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.treasury.inboundTransfer.cancel("inbound_transfer");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**inboundTransfer:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.treasury.InboundTransferCancelRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `InboundTransfer.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Treasury OutboundPayment

<details><summary><code>client.treasury.outboundPayment.<a href="/src/api/resources/treasury/resources/outboundPayment/client/Client.ts">update</a>(id, { ...params }) -> Stripe.TreasuryOutboundPayment</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Updates a test mode created OutboundPayment with tracking details. The OutboundPayment must not be cancelable, and cannot be in the <code>canceled</code> or <code>failed</code> states.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.treasury.outboundPayment.update("id", {
    tracking_details: {
        type: "ach",
    },
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.treasury.OutboundPaymentUpdateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `OutboundPayment.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.treasury.outboundPayment.<a href="/src/api/resources/treasury/resources/outboundPayment/client/Client.ts">fail</a>(id, { ...params }) -> Stripe.TreasuryOutboundPayment</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Transitions a test mode created OutboundPayment to the <code>failed</code> status. The OutboundPayment must already be in the <code>processing</code> state.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.treasury.outboundPayment.fail("id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.treasury.OutboundPaymentFailRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `OutboundPayment.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.treasury.outboundPayment.<a href="/src/api/resources/treasury/resources/outboundPayment/client/Client.ts">post</a>(id, { ...params }) -> Stripe.TreasuryOutboundPayment</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Transitions a test mode created OutboundPayment to the <code>posted</code> status. The OutboundPayment must already be in the <code>processing</code> state.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.treasury.outboundPayment.post("id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.treasury.OutboundPaymentPostRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `OutboundPayment.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.treasury.outboundPayment.<a href="/src/api/resources/treasury/resources/outboundPayment/client/Client.ts">returnOutboundPayment</a>(id, { ...params }) -> Stripe.TreasuryOutboundPayment</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Transitions a test mode created OutboundPayment to the <code>returned</code> status. The OutboundPayment must already be in the <code>processing</code> state.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.treasury.outboundPayment.returnOutboundPayment("id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.treasury.OutboundPaymentReturnOutboundPaymentRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `OutboundPayment.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.treasury.outboundPayment.<a href="/src/api/resources/treasury/resources/outboundPayment/client/Client.ts">list</a>({ ...params }) -> Stripe.OutboundPaymentListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Returns a list of OutboundPayments sent from the specified FinancialAccount.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.treasury.outboundPayment.list({
    financial_account: "financial_account",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Stripe.treasury.OutboundPaymentListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `OutboundPayment.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.treasury.outboundPayment.<a href="/src/api/resources/treasury/resources/outboundPayment/client/Client.ts">create</a>({ ...params }) -> Stripe.TreasuryOutboundPayment</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Creates an OutboundPayment.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.treasury.outboundPayment.create({
    amount: 1,
    currency: "currency",
    financial_account: "financial_account",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Stripe.treasury.OutboundPaymentCreateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `OutboundPayment.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.treasury.outboundPayment.<a href="/src/api/resources/treasury/resources/outboundPayment/client/Client.ts">retrieve</a>(id, { ...params }) -> Stripe.TreasuryOutboundPayment</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Retrieves the details of an existing OutboundPayment by passing the unique OutboundPayment ID from either the OutboundPayment creation request or OutboundPayment list.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.treasury.outboundPayment.retrieve("id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.treasury.OutboundPaymentRetrieveRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `OutboundPayment.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.treasury.outboundPayment.<a href="/src/api/resources/treasury/resources/outboundPayment/client/Client.ts">cancel</a>(id, { ...params }) -> Stripe.TreasuryOutboundPayment</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Cancel an OutboundPayment.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.treasury.outboundPayment.cancel("id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.treasury.OutboundPaymentCancelRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `OutboundPayment.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Treasury OutboundTransfer

<details><summary><code>client.treasury.outboundTransfer.<a href="/src/api/resources/treasury/resources/outboundTransfer/client/Client.ts">update</a>(outboundTransfer, { ...params }) -> Stripe.TreasuryOutboundTransfer</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Updates a test mode created OutboundTransfer with tracking details. The OutboundTransfer must not be cancelable, and cannot be in the <code>canceled</code> or <code>failed</code> states.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.treasury.outboundTransfer.update("outbound_transfer", {
    tracking_details: {
        type: "ach",
    },
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**outboundTransfer:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.treasury.OutboundTransferUpdateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `OutboundTransfer.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.treasury.outboundTransfer.<a href="/src/api/resources/treasury/resources/outboundTransfer/client/Client.ts">fail</a>(outboundTransfer, { ...params }) -> Stripe.TreasuryOutboundTransfer</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Transitions a test mode created OutboundTransfer to the <code>failed</code> status. The OutboundTransfer must already be in the <code>processing</code> state.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.treasury.outboundTransfer.fail("outbound_transfer");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**outboundTransfer:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.treasury.OutboundTransferFailRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `OutboundTransfer.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.treasury.outboundTransfer.<a href="/src/api/resources/treasury/resources/outboundTransfer/client/Client.ts">post</a>(outboundTransfer, { ...params }) -> Stripe.TreasuryOutboundTransfer</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Transitions a test mode created OutboundTransfer to the <code>posted</code> status. The OutboundTransfer must already be in the <code>processing</code> state.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.treasury.outboundTransfer.post("outbound_transfer");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**outboundTransfer:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.treasury.OutboundTransferPostRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `OutboundTransfer.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.treasury.outboundTransfer.<a href="/src/api/resources/treasury/resources/outboundTransfer/client/Client.ts">returnOutboundTransfer</a>(outboundTransfer, { ...params }) -> Stripe.TreasuryOutboundTransfer</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Transitions a test mode created OutboundTransfer to the <code>returned</code> status. The OutboundTransfer must already be in the <code>processing</code> state.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.treasury.outboundTransfer.returnOutboundTransfer("outbound_transfer");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**outboundTransfer:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.treasury.OutboundTransferReturnOutboundTransferRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `OutboundTransfer.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.treasury.outboundTransfer.<a href="/src/api/resources/treasury/resources/outboundTransfer/client/Client.ts">list</a>({ ...params }) -> Stripe.OutboundTransferListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Returns a list of OutboundTransfers sent from the specified FinancialAccount.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.treasury.outboundTransfer.list({
    financial_account: "financial_account",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Stripe.treasury.OutboundTransferListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `OutboundTransfer.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.treasury.outboundTransfer.<a href="/src/api/resources/treasury/resources/outboundTransfer/client/Client.ts">create</a>({ ...params }) -> Stripe.TreasuryOutboundTransfer</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Creates an OutboundTransfer.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.treasury.outboundTransfer.create({
    amount: 1,
    currency: "currency",
    financial_account: "financial_account",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Stripe.treasury.OutboundTransferCreateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `OutboundTransfer.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.treasury.outboundTransfer.<a href="/src/api/resources/treasury/resources/outboundTransfer/client/Client.ts">retrieve</a>(outboundTransfer, { ...params }) -> Stripe.TreasuryOutboundTransfer</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Retrieves the details of an existing OutboundTransfer by passing the unique OutboundTransfer ID from either the OutboundTransfer creation request or OutboundTransfer list.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.treasury.outboundTransfer.retrieve("outbound_transfer");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**outboundTransfer:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.treasury.OutboundTransferRetrieveRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `OutboundTransfer.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.treasury.outboundTransfer.<a href="/src/api/resources/treasury/resources/outboundTransfer/client/Client.ts">cancel</a>(outboundTransfer, { ...params }) -> Stripe.TreasuryOutboundTransfer</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>An OutboundTransfer can be canceled if the funds have not yet been paid out.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.treasury.outboundTransfer.cancel("outbound_transfer");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**outboundTransfer:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.treasury.OutboundTransferCancelRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `OutboundTransfer.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Treasury ReceivedCredit

<details><summary><code>client.treasury.receivedCredit.<a href="/src/api/resources/treasury/resources/receivedCredit/client/Client.ts">create</a>({ ...params }) -> Stripe.TreasuryReceivedCredit</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Use this endpoint to simulate a test mode ReceivedCredit initiated by a third party. In live mode, you can’t directly create ReceivedCredits initiated by third parties.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.treasury.receivedCredit.create({
    amount: 1,
    currency: "currency",
    financial_account: "financial_account",
    network: "ach",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Stripe.treasury.ReceivedCreditCreateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ReceivedCredit.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.treasury.receivedCredit.<a href="/src/api/resources/treasury/resources/receivedCredit/client/Client.ts">list</a>({ ...params }) -> Stripe.ReceivedCreditListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Returns a list of ReceivedCredits.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.treasury.receivedCredit.list({
    financial_account: "financial_account",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Stripe.treasury.ReceivedCreditListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ReceivedCredit.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.treasury.receivedCredit.<a href="/src/api/resources/treasury/resources/receivedCredit/client/Client.ts">retrieve</a>(id, { ...params }) -> Stripe.TreasuryReceivedCredit</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Retrieves the details of an existing ReceivedCredit by passing the unique ReceivedCredit ID from the ReceivedCredit list.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.treasury.receivedCredit.retrieve("id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.treasury.ReceivedCreditRetrieveRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ReceivedCredit.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Treasury ReceivedDebit

<details><summary><code>client.treasury.receivedDebit.<a href="/src/api/resources/treasury/resources/receivedDebit/client/Client.ts">create</a>({ ...params }) -> Stripe.TreasuryReceivedDebit</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Use this endpoint to simulate a test mode ReceivedDebit initiated by a third party. In live mode, you can’t directly create ReceivedDebits initiated by third parties.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.treasury.receivedDebit.create({
    amount: 1,
    currency: "currency",
    financial_account: "financial_account",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Stripe.treasury.ReceivedDebitCreateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ReceivedDebit.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.treasury.receivedDebit.<a href="/src/api/resources/treasury/resources/receivedDebit/client/Client.ts">list</a>({ ...params }) -> Stripe.ReceivedDebitListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Returns a list of ReceivedDebits.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.treasury.receivedDebit.list({
    financial_account: "financial_account",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Stripe.treasury.ReceivedDebitListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ReceivedDebit.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.treasury.receivedDebit.<a href="/src/api/resources/treasury/resources/receivedDebit/client/Client.ts">retrieve</a>(id, { ...params }) -> Stripe.TreasuryReceivedDebit</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Retrieves the details of an existing ReceivedDebit by passing the unique ReceivedDebit ID from the ReceivedDebit list</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.treasury.receivedDebit.retrieve("id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.treasury.ReceivedDebitRetrieveRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ReceivedDebit.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Treasury CreditReversal

<details><summary><code>client.treasury.creditReversal.<a href="/src/api/resources/treasury/resources/creditReversal/client/Client.ts">list</a>({ ...params }) -> Stripe.CreditReversalListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Returns a list of CreditReversals.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.treasury.creditReversal.list({
    financial_account: "financial_account",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Stripe.treasury.CreditReversalListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CreditReversal.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.treasury.creditReversal.<a href="/src/api/resources/treasury/resources/creditReversal/client/Client.ts">create</a>({ ...params }) -> Stripe.TreasuryCreditReversal</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Reverses a ReceivedCredit and creates a CreditReversal object.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.treasury.creditReversal.create({
    received_credit: "received_credit",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Stripe.treasury.CreditReversalCreateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CreditReversal.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.treasury.creditReversal.<a href="/src/api/resources/treasury/resources/creditReversal/client/Client.ts">retrieve</a>(creditReversal, { ...params }) -> Stripe.TreasuryCreditReversal</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Retrieves the details of an existing CreditReversal by passing the unique CreditReversal ID from either the CreditReversal creation request or CreditReversal list</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.treasury.creditReversal.retrieve("credit_reversal");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**creditReversal:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.treasury.CreditReversalRetrieveRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CreditReversal.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Treasury DebitReversal

<details><summary><code>client.treasury.debitReversal.<a href="/src/api/resources/treasury/resources/debitReversal/client/Client.ts">list</a>({ ...params }) -> Stripe.DebitReversalListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Returns a list of DebitReversals.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.treasury.debitReversal.list({
    financial_account: "financial_account",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Stripe.treasury.DebitReversalListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DebitReversal.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.treasury.debitReversal.<a href="/src/api/resources/treasury/resources/debitReversal/client/Client.ts">create</a>({ ...params }) -> Stripe.TreasuryDebitReversal</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Reverses a ReceivedDebit and creates a DebitReversal object.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.treasury.debitReversal.create({
    received_debit: "received_debit",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Stripe.treasury.DebitReversalCreateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DebitReversal.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.treasury.debitReversal.<a href="/src/api/resources/treasury/resources/debitReversal/client/Client.ts">retrieve</a>(debitReversal, { ...params }) -> Stripe.TreasuryDebitReversal</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Retrieves a DebitReversal object.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.treasury.debitReversal.retrieve("debit_reversal");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**debitReversal:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.treasury.DebitReversalRetrieveRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DebitReversal.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Treasury FinancialAccount

<details><summary><code>client.treasury.financialAccount.<a href="/src/api/resources/treasury/resources/financialAccount/client/Client.ts">list</a>({ ...params }) -> Stripe.FinancialAccountListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Returns a list of FinancialAccounts.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.treasury.financialAccount.list();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Stripe.treasury.FinancialAccountListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `FinancialAccount.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.treasury.financialAccount.<a href="/src/api/resources/treasury/resources/financialAccount/client/Client.ts">create</a>({ ...params }) -> Stripe.TreasuryFinancialAccount</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Creates a new FinancialAccount. For now, each connected account can only have one FinancialAccount.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.treasury.financialAccount.create({
    supported_currencies: ["supported_currencies"],
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Stripe.treasury.FinancialAccountCreateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `FinancialAccount.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.treasury.financialAccount.<a href="/src/api/resources/treasury/resources/financialAccount/client/Client.ts">retrieve</a>(financialAccount, { ...params }) -> Stripe.TreasuryFinancialAccount</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Retrieves the details of a FinancialAccount.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.treasury.financialAccount.retrieve("financial_account");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**financialAccount:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.treasury.FinancialAccountRetrieveRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `FinancialAccount.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.treasury.financialAccount.<a href="/src/api/resources/treasury/resources/financialAccount/client/Client.ts">update</a>(financialAccount, { ...params }) -> Stripe.TreasuryFinancialAccount</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Updates the details of a FinancialAccount.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.treasury.financialAccount.update("financial_account");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**financialAccount:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.treasury.FinancialAccountUpdateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `FinancialAccount.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.treasury.financialAccount.<a href="/src/api/resources/treasury/resources/financialAccount/client/Client.ts">close</a>(financialAccount, { ...params }) -> Stripe.TreasuryFinancialAccount</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Closes a FinancialAccount. A FinancialAccount can only be closed if it has a zero balance, has no pending InboundTransfers, and has canceled all attached Issuing cards.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.treasury.financialAccount.close("financial_account");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**financialAccount:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.treasury.FinancialAccountCloseRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `FinancialAccount.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.treasury.financialAccount.<a href="/src/api/resources/treasury/resources/financialAccount/client/Client.ts">retrieveFeatures</a>(financialAccount, { ...params }) -> Stripe.TreasuryFinancialAccountFeatures</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Retrieves Features information associated with the FinancialAccount.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.treasury.financialAccount.retrieveFeatures("financial_account");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**financialAccount:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.treasury.FinancialAccountRetrieveFeaturesRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `FinancialAccount.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.treasury.financialAccount.<a href="/src/api/resources/treasury/resources/financialAccount/client/Client.ts">updateFeatures</a>(financialAccount, { ...params }) -> Stripe.TreasuryFinancialAccountFeatures</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Updates the Features associated with a FinancialAccount.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.treasury.financialAccount.updateFeatures("financial_account");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**financialAccount:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.treasury.FinancialAccountUpdateFeaturesRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `FinancialAccount.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Treasury TransactionEntry

<details><summary><code>client.treasury.transactionEntry.<a href="/src/api/resources/treasury/resources/transactionEntry/client/Client.ts">list</a>({ ...params }) -> Stripe.TransactionEntryListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Retrieves a list of TransactionEntry objects.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.treasury.transactionEntry.list({
    financial_account: "financial_account",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Stripe.treasury.TransactionEntryListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TransactionEntry.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.treasury.transactionEntry.<a href="/src/api/resources/treasury/resources/transactionEntry/client/Client.ts">retrieve</a>(id, { ...params }) -> Stripe.TreasuryTransactionEntry</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Retrieves a TransactionEntry object.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.treasury.transactionEntry.retrieve("id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.treasury.TransactionEntryRetrieveRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TransactionEntry.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Treasury Transaction

<details><summary><code>client.treasury.transaction.<a href="/src/api/resources/treasury/resources/transaction/client/Client.ts">list</a>({ ...params }) -> Stripe.TransactionListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Retrieves a list of Transaction objects.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.treasury.transaction.list({
    financial_account: "financial_account",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Stripe.treasury.TransactionListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Transaction.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.treasury.transaction.<a href="/src/api/resources/treasury/resources/transaction/client/Client.ts">retrieve</a>(id, { ...params }) -> Stripe.TreasuryTransaction</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<p>Retrieves the details of an existing Transaction.</p>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.treasury.transaction.retrieve("id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Stripe.treasury.TransactionRetrieveRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Transaction.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>
