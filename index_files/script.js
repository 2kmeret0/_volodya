$(function () {
	//script for popups
	$('a.show_popup').click(function () {
		$('div.'+$(this).attr("rel")).fadeIn(500);
		$("body").append("<div id='overlay'></div>");
		$('#overlay').show().css({'filter' : 'alpha(opacity=80)'});
		return false;				
	});	
	$('a.close').click(function () {
		$(this).parent().fadeOut(100);
		$('#overlay').remove('#overlay');
		return false;
	});	
});	

function f1(form)
{
	c = eval(form.C.value);
	mn = eval(form.Mg.value);
	ni = eval(form.Ni.value);
	cr = eval(form.Cr.value);
	mo = eval(form.Mo.value);
	v = eval(form.V.value);
	form.Ce.value = c + mn/20 + ni/15 + (cr + mo + v)/10;
}

function f2(form)
{
	c = eval(form.C.value);
	s = eval(form.S.value);
	p = eval(form.P.value);
	si = eval(form.Si.value);
	mn = eval(form.Mg.value);
	ni = eval(form.Ni.value);
	cu = eval(form.Cu.value);
	cr = eval(form.Cr.value);
	form.Ce.value = c + 2*s + p/3 + (si-0.4)/4 + (mn-0.8)/8 + ni/8 + cu/10 + (cr-0.8)/10;
}

function f3(form)
{
	c = eval(form.C.value);
	mn = eval(form.Mn.value);
	si = eval(form.Si.value);
	ni = eval(form.Ni.value);
	cr = eval(form.Cr.value);
	mo = eval(form.Mo.value);
	v = eval(form.V.value);
	cu = eval(form.Cu.value);
	b = eval(form.B.value);
	form.Ce.value = c + mn/6 + si/24 + ni/10 + cr/5 + mo/4 + v/14 + cu/15 + 5*b;
}

function f4(form)
{
	ce = eval(form.Ce.value);
	form.W.value = 11.414 * Math.pow(ce, -1.4678);
}

function f5(form)
{
	w = eval(form.W.value);
	form.Ce.value = 0.78 - 0.15 * Math.log10(w);
}

function f6(form)
{
	ce = eval(form.Ce.value);
	form.T.value = 550 * Math.sqrt(ce - 0.45);
}

function f7(form)
{
	c = eval(form.C.value);
	d = eval(form.d.value);
	form.C2.value = c*(1+0.005*d);
}

function f8(form)
{
	leom = eval(form.LeOm.value);
	lepr = eval(form.LePr.value);
	lefe = eval(form.LeFe.value);
	y = eval(form.Y.value);
	kpr = eval(form.Kpr.value);
	kpokr = eval(form.Kpokr.value);
	g = eval(form.G.value);
	pfe = eval(form.Pfe.value);
	form.LeSh.value = y*leom + (1-y)*lepr*kpr + g*(1-y)*pfe*lefe*kpokr;
}

function f9(form)
{
	leom = eval(form.LeOm.value);
	lepr = eval(form.LePr.value);
	y = eval(form.Y.value);
	kpr = eval(form.Kpr.value);
	form.LeSh.value = y*leom + (1-y)*lepr*kpr;
}

function f10(form)
{
	g = eval(form.G.value);
	pfe = eval(form.Pfe.value);
	lefe = eval(form.LeFe.value);
	kfl = eval(form.Kfl.value);
	form.LeNm.value = g*pfe*lefe*kfl;
}

function f11(form)
{
	s = eval(form.S.value);
	f = eval(form.F.value);
	form.n.value = s/f;
}

function f12(form)
{
	d = eval(form.d.value);
	form.I.value = (20 + 6*d)*d;
}

function f13(form)
{
	I = eval(form.I.value);
	form.U.value = 20 + 0.04*I;
}

function f14(form)
{
	I = eval(form.I.value);
	a = eval(form.A.value);
	y = eval(form.Y.value);
	f = eval(form.F.value);
	form.V.value = (a*I)/(3600*y*f);
}

function f15(form)
{
	d = eval(form.D.value);
	b = eval(form.B.value);
	form.I.value = (75 * b)/(1.75 - 0.15 * d);
}

function f16(form)
{
	d = eval(form.D.value);
	a = eval(form.A.value);
	form.I.value = (Math.PI * Math.pow(d, 2) * a)/4;
}

function f17(form)
{
	I = eval(form.I.value);
	u = (14 + 0.05*I)
	form.U.value = u + "±1";
}

function f19(form)
{
	r = eval(form.R.value);
	w = eval(form.W.value);
	form.H.value = r*(1-w);
}

function f20(form)
{
	d = eval(form.D.value);
	i = eval(form.I.value);
	form.A.value = 3 + 0.08*i/d;
}

function f21(form)
{
	I = eval(form.I.value);
	a = eval(form.A.value);
	y = eval(form.Y.value);
	d = eval(form.D.value);
	form.V.value = (4*a*I)/(3600*y*Math.PI * Math.pow(d, 2));
}

function f22(form)
{
	e = eval(form.E.value);
	g = eval(form.G.value);
	s = eval(form.S.value);
	b = eval(form.B.value);
	form.A.value = 0.75*e*g+s*b;
}

function f23(form)
{
	h = eval(form.H.value);
	d = eval(form.D.value);
	form.I.value = h*d;
}

function f24(form)
{
	s = eval(form.S.value);
	d = eval(form.D.value);
	form.H.value = s*d;
}

function f25(form)
{
	s = eval(form.S.value);
	d = eval(form.D.value);
	form.H.value = s/2+d;
}

function f26(form)
{
	i = eval(form.I.value);
	j = eval(form.D.value);
	form.D.value = (2*i)/(Math.PI * j);
}

function f27(form)
{
	i = eval(form.I.value);
	a = eval(form.A.value);
	y = eval(form.Y.value);
	sh = eval(form.SH.value);
	form.V.value = (a*i)/(y*sh);
}

function f28(form)
{
	a = eval(form.A.value);
	b = eval(form.B.value);
	d = eval(form.D.value);
	form.K.value = a+b/d;
}

function f29(form)
{
	ash = eval(form.ASH.value);
	vsv = eval(form.VSV.value);
	ae = eval(form.AE.value);
	form.V.value = ash*vsv/ae;
}

function f30(form)
{
	a = eval(form.A.value);
	i = eval(form.I.value);
	d = eval(form.D.value);
	y = eval(form.Y.value);
	form.V.value = (4*a*i)/(y*Math.PI * Math.pow(d, 2));
}

//

function af64(form)
{
	i = eval(form.ips.value);
	f = eval(form.fi.value);
	l = eval(form.la.value);
	tm = eval(form.tm.value);
	tn = eval(form.tnull.value);
	q = eval(form.q.value);
	v = eval(form.V.value);	
	form.Ce.value = -(i/f) * (6.28 * l * Math.pow((tm-tn),2))/(q/v);
}

function af65(form)
{
	f = eval(form.f.value);	
	form.Ce.value = 0.145 + 2.718*(-((1/f)-0.39));
}

function af66(form)
{
	q = eval(form.a.value);
	v = eval(form.b.value);
	d = eval(form.c.value);
	c = eval(form.d.value);
	g = eval(form.e.value);
	tm = eval(form.f.value);
	tn = eval(form.g.value);	
	form.Ce.value = (2*q/v)/(3.14*Math.pow(d,2)*c*g*(tm-tn));
}

function af67(form)
{
	q = eval(form.a.value);
	v = eval(form.b.value);
	f = eval(form.c.value);
	l = eval(form.l.value);	
	tm = eval(form.e.value);
	tn = eval(form.f.value);	
	form.Ce.value = f*((q/v)/(l*(tm-tn)));
}

function af68(form)
{
	t = eval(form.a.value);
	tm = eval(form.b.value);
	tn = eval(form.c.value);
		
	form.Ce.value = (t-tn)/(tm-tn);
}

function af69(form)
{
	t = eval(form.a.value);		
	form.Ce.value = 0.181*Math.pow(t,-1)-0.144;
}

function af70(form)
{
	tn = eval(form.a.value);
	tz = eval(form.b.value);
	tv = eval(form.c.value);
	to = eval(form.l.value);		
	form.Ce.value = tn+tz+tv+to;
}

function af71(form)
{
	m = eval(form.a.value);
	a = eval(form.b.value);
	i = eval(form.c.value);			
	form.Ce.value = m/(a*i);
}

function af72(form)
{
	m = eval(form.a.value);
	a = eval(form.b.value);
	i = eval(form.c.value);			
	
	form.Ce.value = m*a*i;
}

function af73(form)
{
	a = eval(form.b.value);
	i = eval(form.c.value);			
	form.Ce.value = i/a;
}

function af75(form)
{
	tn = eval(form.a.value);
	tz = eval(form.b.value);
	tv = eval(form.c.value);
	to = eval(form.d.value);		
	form.Ce.value = tn+tz+tv+to;
}

function af78(form)
{
	m = eval(form.a.value);
	a = eval(form.b.value);
	i = eval(form.c.value);			
	form.Ce.value = m*a*i;
}

function af79(form)
{
	m = eval(form.a.value);
	a = eval(form.b.value);
				
	form.Ce.value = m*a;
}

function af80(form)
{
	m = eval(form.a.value);
	a = eval(form.b.value);
				
	form.Ce.value = (m+1)*a;
}

function af81(form)
{
	m = eval(form.a.value);
	a = eval(form.b.value);
				
	form.Ce.value = m*a;
}

function af84(form)
{	
	a = eval(form.b.value);
				
	form.Ce.value = 1.5*a;
}

function af85(form)
{
	m = eval(form.a.value);
	a = eval(form.b.value);
				
	form.Ce.value = m*a;
}

function af86(form)
{
	tn = eval(form.a.value);
	tz = eval(form.b.value);
	tv = eval(form.c.value);
	to = eval(form.d.value);
	ro = eval(form.d.value);		
	form.Ce.value = (tn*tv+tz*to)*ro;
}

function af87(form)
{
	m = eval(form.a.value);
	a = eval(form.b.value);
				
	form.Ce.value = (m*a)/60;
}

function af88(form)
{
	a = eval(form.a.value);
	b = eval(form.b.value);
	c = eval(form.c.value);
			
	form.Ce.value = a/(b*c);
}

function af89(form)
{
	m = eval(form.a.value);
	a = eval(form.b.value);
				
	form.Ce.value = m*a;
}

function af90(form)
{
	m = eval(form.a.value);
	a = eval(form.b.value);
				
	form.Ce.value = m/a;
}

function af91(form)
{
	m = eval(form.a.value);
	a = eval(form.b.value);
				
	form.Ce.value = m/a;
}

function af92(form)
{
	m = eval(form.a.value);
	a = eval(form.b.value);
	c = eval(form.c.value);			
	form.Ce.value = m/(a*c);
}

function af93(form)
{
	m = eval(form.a.value);
	a = eval(form.b.value);
				
	form.Ce.value = m*a;
}

function af94(form)
{
	m = eval(form.a.value);
	a = eval(form.b.value);
				
	form.Ce.value = m/a;
}

function af95(form)
{
	m = eval(form.a.value);
					
	form.Ce.value = m*0.15;
}

function af97(form)
{
	m = eval(form.a.value);
					
	form.Ce.value = m*0.3;
}

function af98(form)
{
	m = eval(form.a.value);
					
	form.Ce.value = m*0.5;
}

function af99(form)
{
	m = eval(form.a.value);
					
	form.Ce.value = m*0.2;
}

function af100(form)
{
	a = eval(form.a.value);
	b = eval(form.b.value);
	с = eval(form.c.value);
	d = eval(form.d.value);
	e = eval(form.e.value);
	f = eval(form.f.value);
					
	form.Ce.value = (a*b*c*d)/(e*f);
}

function af101(form)
{
	a = eval(form.a.value);
	b = eval(form.b.value);
	с = eval(form.c.value);
					
	form.Ce.value = a*b*c;
}

////////////


function f653(form)
{
	e = eval(form.e653.value);
	q = eval(form.q653.value);
	S = eval(form.S653.value);
	b = eval(form.b653.value);
	form.As653.value = (0.75*e*q + S*b);
}

function f652(form)
{
	an = eval(form.an652.value);
	I = eval(form.I652.value);
	n = eval(form.n652.value);
	d = eval(form.d652.value);
	y = eval(form.y652.value);
	form.Vpod652.value = ((4*an*I)/(n*(d*d)*y));
}

function f651(form)
{
	K = eval(form.K651.value);
	f = eval(form.f651.value);
	q = eval(form.q651.value);
	form.Aw651.value = (((K*(f*f))/2) + (1.05*(K*f)*q));
}

function f650(form)
{
	an = eval(form.an650.value);
	I = eval(form.I650.value);
	y = eval(form.y650.value);
	Aw = eval(form.Aw650.value);
	form.Vsv650.value = ((an*I)/(y*Aw));
}

function f646(form)
{
	A = eval(form.A646.value);
	b = eval(form.b646.value);
	S = eval(form.S646.value);
	n = eval(form.n646.value);
	form.Aw646.value = ((b*Math.pow(n, A))*(S*(Math.pow(n, A)))); 
}

function f644(form)
{
	M = eval(form.M644.value);
	Mst = eval(form.Mst644.value);
	P = eval(form.P644.value);
	h = eval(form.h644.value);
	form.N644.value = ((Math.pow(M, P) - Mst)/h);
}

function f642(form)
{
	Sst = eval(form.Sst642.value);
	hst = eval(form.hst642.value);
	form.Wst642.value = ((Sst*Math.pow(hst, 2))/6);
}

function f638(form)
{
	Sst = eval(form.Sst638.value);
	hst = eval(form.hst638.value);
	form.Ist638.value = ((Sst*Math.pow(hst, 3))/12);
}

function f640(form)
{
	Sst = eval(form.Sst640.value);
	hst = eval(form.hst640.value);
	form.Sx640.value = ((Sst*Math.pow(hst, 2))/8);
}

function f637(form)
{
	M = eval(form.M637.value);
	P = eval(form.P637.value);
	Ist = eval(form.Ist637.value);
	Ix = eval(form.Ix637.value);
	form.Mst637.value = (Math.pow(M, P)*(Ist/Ix));
}

function f641(form)
{
	Mst = eval(form.Mst641.value);
	Wst = eval(form.Wst641.value);
	form.Sig641.value = (Mst/Wst);
}

function f645(form)
{
	N = eval(form.N645.value);
	Aw = eval(form.Aw645.value);
	form.Sig645.value = (N/Aw);
}

//////////