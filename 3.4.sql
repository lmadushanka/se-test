SELECT u.firstName, u.lastName, g.name 
FROM user u 
JOIN groupMembership gm ON u.id = gm.userID 
JOIN group g ON gm.groupID = g.id 
WHERE u.created < g.created;
